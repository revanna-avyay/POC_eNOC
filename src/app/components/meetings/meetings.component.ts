import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { NativeDateAdapter, MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatDatepickerModule, CommonModule, MatNativeDateModule],
  providers: [{ provide: NativeDateAdapter }],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss'
})
export class MeetingsComponent implements OnInit {
  selectedDate: Date = new Date();
  currentWeekDates: Date[] = [];
  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  meetings = [
    { time: '10:00 am', details: 'Meeting with Aroma', date: new Date('2023-12-07T10:00:00') },
    { time: '12:00 pm', details: 'Meeting with Yoosuf', date: new Date('2023-12-07T12:00:00') },
  ];

  ngOnInit(): void {
    this.getCurrentWeek();
  }

  getCurrentWeek(): void {
    const today = new Date();
    const startOfWeek = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1); // Adjust when Sunday is the first day
    this.currentWeekDates = Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(today);
      date.setDate(startOfWeek + i);
      return date;
    });
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  isSelected(date: Date): boolean {
    return this.selectedDate.toDateString() === date.toDateString();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }
}
