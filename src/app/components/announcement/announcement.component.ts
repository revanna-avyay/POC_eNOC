import { Component } from '@angular/core';
import { StatusInquireComponent } from '../status-inquire/status-inquire.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementsModalComponent } from '../announcements-modal/announcements-modal.component';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [StatusInquireComponent, CommonModule, FormsModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent {
  announcements = [
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
    {
      date: new Date('2023-08-16T11:30:00'),
      title: 'Revalidation of NOC from 6 weeks!',
      description: 'We are glad to inform you...',
      isNew: true,
    },
    {
      date: new Date('2023-07-11T11:30:00'),
      title: 'Attachment size has been increased from 500 MB to 600 MB',
      description: 'We are glad to inform you...',
      isNew: false,
    },
  ];

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(AnnouncementsModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.announcements = this.announcements;
  }
}
