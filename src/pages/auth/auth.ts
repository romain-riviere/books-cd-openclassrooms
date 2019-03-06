import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-auth',
    templateUrl: './auth.html'
})
export class AuthPage implements OnInit {

    authForm: FormGroup;
    errorMessage: string;
    signUpMode: boolean = false;

    constructor(
        private authService: AuthService,
        private menuCtrl: MenuController,
        private formBuilder: FormBuilder,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.initForm();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    initForm() {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmitForm() {
        const email = this.authForm.get('email').value;
        const password = this.authForm.get('password').value;
        if (this.signUpMode) {
            this.authService.signUpUser(email, password).then(
                () => {
                    this.navCtrl.setRoot(TabsPage);
                },
                (error) => {
                    this.errorMessage = error;
                }
            );
        } else if (!this.signUpMode) {
            this.authService.signInUser(email, password).then(
                () => {
                    this.navCtrl.setRoot(TabsPage);
                },
                (error) => {
                    this.errorMessage = error;
                }
            );
        }
    }
}