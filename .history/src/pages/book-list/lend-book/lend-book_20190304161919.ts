import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../../models/Book';
import { LibraryService } from '../../../services/library.service';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {
  index: number;
  book: Book;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public libraryService: LibraryService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.libraryService.bookList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
  }

}