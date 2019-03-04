import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../../models/CD';
import { LibraryService } from '../../../services/library.service';

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
  cd: CD;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public libraryService: LibraryService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.libraryService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCD() {
    this.cd.isLend = !this.cd.isLend;
  }

}