import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Item } from '../../../models/Item';
import { LibraryService } from '../../../services/library.service';
import { NgForm } from '@angular/forms';

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
  borrower: string;
  book: Item;
  errorMessage: string;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public libraryService: LibraryService
  ) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.libraryService.bookList[this.index];
    this.borrower = this.book.borrower;
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onLendBook(form: NgForm) {
    if (form.value.borrower) {
      this.book.borrower = form.value.borrower;
      this.book.isLend = true;
      this.libraryService.saveBooks();
      this.dismissModal();
    } else {
      this.errorMessage = 'Vous devez renseigner l\'emprunteur'
    }
  }

  onRecoverBook() {
    this.book.borrower = '';
    this.book.isLend = false;
    this.libraryService.saveBooks();
    this.dismissModal();
  }
}