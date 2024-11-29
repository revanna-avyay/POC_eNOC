import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationStatusComponent } from '../application-status/application-status.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-inquire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './status-inquire.component.html',
  styleUrl: './status-inquire.component.scss',
})
export class StatusInquireComponent {
  nocInput?: string = '';
  nocArrays = ['123456', '112233', '16020'];
  noNOCFound?: boolean;
  closeButton: boolean = true;

  constructor(private readonly modalService: NgbModal) {}

  inputEvent(text: string): void {
    this.noNOCFound = false;
  }

  openModal() {
    if (this.nocInput?.trim() !== '') {
      let nocFound = this.nocArrays.findIndex(
        (item) => item.trim() === this.nocInput?.trim()
      );
      if (nocFound <= -1) {
        this.noNOCFound = true;
      } else {
        const modalRef = this.modalService.open(ApplicationStatusComponent, {
          size: 'lg',
        });
        modalRef.componentInstance.closeButton = this.closeButton;
        if (this.noNOCFound) {
          this.noNOCFound = false;
        }
      }
    }
  }
}
