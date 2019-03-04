import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { LibraryService } from '../../services/library.service';
import { LendCdPage } from './lend-cd/lend-cd';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdList: CD[];

  constructor(private modalCtrl: ModalController,
    private libraryService: LibraryService,
    private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.cdList = this.libraryService.cdList.slice();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  onLoadCD(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index });
    modal.present();
  }
}
