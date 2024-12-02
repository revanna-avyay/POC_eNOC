import { Component, Input } from '@angular/core';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-card',
  standalone: true,
  imports: [CommonButtonComponent, CommonModule],
  templateUrl: './common-card.component.html',
  styleUrl: './common-card.component.scss'
})
export class CommonCardComponent {
  @Input() cardData: any = {}

  onSave(params: string) {
    console.log(params)
  }
}
