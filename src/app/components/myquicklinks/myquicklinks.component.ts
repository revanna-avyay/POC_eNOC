import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuicklinkspopupComponent } from '../quicklinkspopup/quicklinkspopup.component';
import { selectedNOC } from '../../data/states'
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { quickLinksData } from '../../store/app.selectors'
import * as allActions from '../../store/app.actions'


@Component({
  selector: 'app-myquicklinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myquicklinks.component.html',
  styleUrl: './myquicklinks.component.scss'
})
export class MyquicklinksComponent implements OnInit {

  store = inject(Store)

  selectedNOCDisplay: any [] = []
  quickLinks$ =  this.store.select(quickLinksData);

  popupHeaderData = [
    { icon:"assets/icons/yellowStar.svg", alt:"star icon" , headerText: "Customize Quick Links" }
  ]

  constructor(private readonly modalService: NgbModal) {
    this.store.dispatch(allActions.quickLinks.updateQuickLinks( { linksList: selectedNOC } ) );
  } 

  ngOnInit(): void {
    this.updateSelectedNOCDisplay()
  }

  updateSelectedNOCDisplay(){
     this.quickLinks$.subscribe((quickLinks) => {
      this.selectedNOCDisplay = quickLinks.filter( (item:any) => item.isSelected === true )
    });
  }

  moreLinksClickHandler(){
      const modalRef = this.modalService.open(QuicklinkspopupComponent, { 
        size: 'lg', 
  }); 
    modalRef.componentInstance.popupHeaderData = this.popupHeaderData; 
  }

}


