import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-enoc',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './new-enoc.component.html',
  styleUrl: './new-enoc.component.scss'
})
export class NewENocComponent {
  @Input() nocData: any[] = []
  colorMap: string[] = [];

  toggleColor(index: number): void {
    this.nocData[index].isBookmark = !this.nocData[index].isBookmark;
  }

  // Helper function to check if the subtitle is a string
  isString(value: any): boolean {
    return typeof value === 'string';
  }
}
