import { Component, Input, OnInit, signal, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { quickLinksData } from '../../store/app.selectors';
import * as allActions from '../../store/app.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quicklinkspopup',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './quicklinkspopup.component.html',
  styleUrls: ['./quicklinkspopup.component.scss'],
})
export class QuicklinkspopupComponent implements OnInit {
  store = inject(Store);

  cardLoopData: { 
    id: number; 
    isSelected: boolean; 
    text: string; 
    isDefaultNOC: boolean; 
  }[] = [];

  selectedCards = signal(0);

  @Input() popupHeaderData: any[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.store.select(quickLinksData).pipe(take(1)).subscribe((links) => {
      this.cardLoopData = links || [];
      this.updateSelectedCard();
    });
  }

  updateSelectedCard(): void {
    this.selectedCards.update(() => this.cardLoopData.filter((item) => item.isSelected).length);
  }

  cardClickHandler(selectedItemId: number): void {
    const selectedIndex = this.cardLoopData.findIndex((item) => item.id === selectedItemId);
    if (selectedIndex !== -1) {
      const selectedCard = this.cardLoopData[selectedIndex];
      if (selectedCard.isDefaultNOC || (this.selectedCards() === 6 && !selectedCard.isSelected)) {
        return;
      }
      this.cardLoopData = this.cardLoopData.map((item) =>
        item.id === selectedItemId ? { ...item, isSelected: !item.isSelected } : item
      );
      this.store.dispatch(allActions.quickLinks.updateQuickLinks({ linksList: this.cardLoopData }));
      this.updateSelectedCard();
    }
  }

  close(): void {
    this.activeModal.close();
  }

  trackByIndex(index: number): number {
    return index;
  }
}
