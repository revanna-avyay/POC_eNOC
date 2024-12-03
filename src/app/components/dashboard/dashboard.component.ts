import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { SubnavComponent } from '../subnav/subnav.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardTabsComponent } from './dashboard-tabs/dashboard-tabs.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, SubnavComponent, DashboardHeaderComponent, DashboardTabsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
