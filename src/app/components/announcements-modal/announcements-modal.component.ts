import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-announcements-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements-modal.component.html',
  styleUrl: './announcements-modal.component.scss'
})
export class AnnouncementsModalComponent {
  @Input() announcements: any[] = []; 
 
  constructor(public activeModal: NgbActiveModal) {} 
 
  close() { 
    this.activeModal.close(); 
  }
}
