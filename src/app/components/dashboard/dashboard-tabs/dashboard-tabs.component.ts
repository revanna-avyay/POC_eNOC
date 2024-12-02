import { Component } from '@angular/core';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-dashboard-tabs',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss'
})
export class DashboardTabsComponent {

}
