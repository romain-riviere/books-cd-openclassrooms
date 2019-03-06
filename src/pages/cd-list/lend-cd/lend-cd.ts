import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Item } from '../../../models/Item';
import { LibraryService } from '../../../services/library.service';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {
  index: number;
  borrower: string;
  cd: Item;
  errorMessage: string;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public libraryService: LibraryService
  ) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.libraryService.cdList[this.index];
    this.borrower = this.cd.borrower;
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCD() {
    this.cd.isLend = !this.cd.isLend;
  }

  onLendCD(form: NgForm) {
    if (form.value.borrower) {
      this.cd.borrower = form.value.borrower;
      this.cd.isLend = true;
      this.libraryService.saveCds();
      this.dismissModal();
    } else {
      this.errorMessage = 'Vous devez renseigner l\'emprunteur'
    }
  }

  onRecoverCD() {
    this.cd.borrower = '';
    this.cd.isLend = false;
    this.libraryService.saveCds();
    this.dismissModal();
  }
}