import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LibraryService } from '../../services/library.service';
import { Book } from '../../models/Book';
import { LendBookPage } from './lend-book/lend-book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  bookList: Book[];

  constructor(private modalCtrl: ModalController,
    private libraryService: LibraryService,
    private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.bookList = this.libraryService.bookList.slice();
  }
  onToggleMenu = () => {
    this.menuCtrl.open();
  }
  onLoadBook = (index: number) => {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }
}
