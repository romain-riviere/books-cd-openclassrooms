import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LibraryService } from '../../services/library.service';
import { Item } from '../../models/Item';
import { LendBookPage } from './lend-book/lend-book';
import { Subscription } from 'rxjs/Subscription';

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
export class BookListPage implements OnInit, OnDestroy {
  bookList: Item[];
  booksSubscription: Subscription;
  booksLoading: boolean = true;

  constructor(
    private modalCtrl: ModalController,
    private libraryService: LibraryService,
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.booksSubscription = this.libraryService.books$.subscribe(
      (books: Item[]) => {
        this.bookList = books
      }
    )
    this.libraryService.emitBooks();
    this.libraryService.retrieveBooks().then(() => {
      this.booksLoading = false;
    });
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }
}
