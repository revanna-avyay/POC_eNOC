import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quicklink-card',
  standalone: true,
  imports: [],
  templateUrl: './quicklink-card.component.html',
  styleUrl: './quicklink-card.component.scss'
})
export class QuicklinkCardComponent {
  @Input() cardData: any = {}

  onSave(params: string) {
    console.log(params)
  }
}
