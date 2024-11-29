import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calender-view',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbDatepickerModule],
  templateUrl: './calender-view.component.html',
  styleUrl: './calender-view.component.scss'
})
export class CalenderViewComponent implements OnInit {
  viewMode: 'month' | 'week' = 'month';
  currentDate = new Date();
  daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  monthDays: any[] = [];
  currentWeek: any[] = [];
  events = [
    { date: '2024-12-09', time: '10:00 am', title: 'Meeting with Aroma' },
    { date: '2024-12-09', time: '12:00 pm', title: 'Meeting with Yoosuf' },
    { date: '2024-12-11', time: '10:00 am', title: 'Meeting with Aroma' },
  ];

  ngOnInit() {
    this.generateMonthView();
    this.updateWeekView();
  }

  setViewMode(mode: 'month' | 'week') {
    this.viewMode = mode;
    if (mode === 'week') {
      this.updateWeekView();
    }
  }

  navigate(direction: number) {
    if (this.viewMode === 'month') {
      this.currentDate.setMonth(this.currentDate.getMonth() + direction);
      this.generateMonthView();
    } else if (this.viewMode === 'week') {
      this.currentDate.setDate(this.currentDate.getDate() + direction * 7);
      this.updateWeekView();
    }
  }

  getCurrentPeriod(): string {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  generateMonthView() {
    const startOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const endOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay() || 7; // Adjust for Sunday = 7
    const totalDays = endOfMonth.getDate();
    this.monthDays = [];
  
    // Add empty days to align the first date correctly
    for (let i = 1; i < startDay; i++) {
      this.monthDays.push({ date: null, events: [] });
    }
  
    // Add days for the current month with events
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
      const events = this.events.filter((event) => new Date(event.date).toDateString() === date.toDateString());
      this.monthDays.push({ date, events });
    }
  }  

  updateWeekView() {
    const startOfWeek = this.getStartOfWeek(this.currentDate);
    this.currentWeek = Array.from({ length: 7 }).map((_, index) => {
      const date = new Date(
        startOfWeek.getFullYear(),
        startOfWeek.getMonth(),
        startOfWeek.getDate() + index
      );
      return {
        date,
        events: this.events.filter(
          (event) => new Date(event.date).toDateString() === date.toDateString()
        ),
      };
    });
  }

  private getStartOfWeek(date: Date): Date {
    const day = date.getDay() || 7;
    const diff = date.getDate() - day + 1;
    return new Date(date.setDate(diff));
  }
}
