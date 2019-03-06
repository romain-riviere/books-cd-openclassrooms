import { Item } from '../models/Item';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

export class LibraryService {
    books$ = new Subject<Item[]>();
    cds$ = new Subject<Item[]>();

    bookList: Item[];

    cdList: Item[];

    emitBooks() {
        this.books$.next(this.bookList);
    }

    emitCDs() {
        this.cds$.next(this.cdList);
    }

    saveBooks() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').set(this.bookList).then(
                (data) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveBooks() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').once('value').then(
                (data) => {
                    this.bookList = data.val();
                    this.emitBooks();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    saveCds() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').set(this.cdList).then(
                (data) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveCds() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('cds').once('value').then(
                (data) => {
                    this.cdList = data.val();
                    this.emitCDs();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}