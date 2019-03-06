import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Item } from '../../models/Item';
import { LibraryService } from '../../services/library.service';
import { LendCdPage } from './lend-cd/lend-cd';
import { Subscription } from 'rxjs/Subscription';

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
  cdList: Item[];
  cdsSubscription: Subscription;
  booksLoading: boolean = true;

  constructor(private modalCtrl: ModalController,
    private libraryService: LibraryService,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.cdsSubscription = this.libraryService.cds$.subscribe(
      (cds: Item[]) => {
        this.cdList = cds
      }
    )
    this.libraryService.emitCDs();
    this.libraryService.retrieveCds().then(() => {
      this.booksLoading = false;
    });;
  }

  ngOnDestroy() {
    this.cdsSubscription.unsubscribe();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  onLoadCD(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index });
    modal.present();
  }
}
