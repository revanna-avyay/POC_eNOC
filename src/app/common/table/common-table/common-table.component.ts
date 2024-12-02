import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-table',
  standalone: true,
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class CommonTableComponent {
  @Input() custData: PeriodicElement[] = []; // Data input for the table

  selectAllChecked = false; // Tracks the state of the "select all" checkbox
  currentSortColumn: keyof PeriodicElement | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor() { }

  // Toggles selection for all rows
  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    this.custData.forEach(row => (row.isSelected = this.selectAllChecked));
  }

  // Checks if all rows are selected
  isAllSelected(): boolean {
    return this.custData.every(row => row.isSelected);
  }

  // Updates the "select all" checkbox state when a single row is toggled
  updateSelectAllState() {
    this.selectAllChecked = this.isAllSelected();
  }

  // Sort table by a specific column
  sortTable(column: keyof PeriodicElement) {
    if (this.currentSortColumn === column) {
      // Toggle sort order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new column and default to ascending order
      this.currentSortColumn = column;
      this.sortOrder = 'asc';
    }

    this.custData.sort((a, b) => {
      const valueA = a[column] ?? '';
      const valueB = b[column] ?? '';

      if (valueA < valueB) return this.sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Get the appropriate icon for sorting
  getSortIcon(column: keyof PeriodicElement): string {
    if (this.currentSortColumn !== column) return 'v'; // icon for unsorted columns
    return this.sortOrder === 'asc' ? 'ʌ' : 'v'; // Upward and downward triangle symbols
  }

  trackById(index: number, item: PeriodicElement): number {
    return item.id; // Assuming 'id' is the unique identifier
  }

}

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  phone: number;
  username: string;
  isSelected?: boolean; // Tracks whether the row is selected
}

