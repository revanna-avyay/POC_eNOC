import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewall-calender',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './viewall-calender.component.html',
  styleUrl: './viewall-calender.component.scss'
})
export class ViewallCalenderComponent {

  currentDate: Date = new Date();
  selectedDate: Date = new Date();
  mode: 'day' | 'week' | 'month' | 'year' = 'month';

  daysOfWeek: string[] = ['Mo', 'Tu', 'We', 'Th', 'F', 'Sa', 'Su'];
  monthsOfYear: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  meetings = [
    {
      "id": 1,
      "date": "2024-11-28T10:00:00",
      "time": "10:00 AM",
      "description": "Meeting with Aroma"
    },
    {
      "id": 2,
      "date": "2024-11-28T12:00:00",
      "time": "12:00 PM",
      "description": "Meeting with Yoosuf"
    },
    {
      "id": 3,
      "date": "2025-01-03T10:00:00",
      "time": "10:00 AM",
      "description": "Meeting with Aroma"
    },
    {
      "id": 4,
      "date": "2025-01-03T12:00:00",
      "time": "12:00 PM",
      "description": "Meeting with Yoosuf"
    }
  ]

  displayedMonth?: string;

  weeks: any[][] = [];
  weekDays: any[] = []

  ngOnInit(): void {
    this.generateCalendar();
  }

  setDisplayedMonth(){
    let currentdate = new Date(this.currentDate)
    this.displayedMonth  = this.monthsOfYear[currentdate.getMonth()]
  }

  generateCalendar(): void {
    if (this.mode === 'month') {
      this.generateMonthView();
    } else if (this.mode === 'week') {
      this.generateWeekView();
    }
    this.setDisplayedMonth()
  }

  generateMonthView(): void {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

    const startDate = new Date(firstDay);
    // startDate.setDate(startDate.getDate() - startDate.getDay());
    const startDay = (startDate.getDay() + 6) % 7; 
    startDate.setDate(startDate.getDate() - startDay);

    const endDate = new Date(lastDay);
    // endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    const endDay = (endDate.getDay() + 6) % 7; 
    endDate.setDate(endDate.getDate() + (6 - endDay));

    const days = [];
    let current = new Date(startDate);

    while (current <= endDate) {
      days.push(new Date(current));

      // const meetings = this.hasMeetingOnDate(current);
      // days.push({
      //   date: new Date(current),
      //   meetings, 
      // });

      current.setDate(current.getDate() + 1);
    }

    this.weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      this.weeks.push(days.slice(i, i + 7));
    }
  }

  generateWeekView() {
    const startOfWeek = new Date(this.currentDate);
    // startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());
    const startDay = (this.currentDate.getDay() + 6) % 7; 
    startOfWeek.setDate(this.currentDate.getDate() - startDay);

    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      this.weekDays.push(day);
    }
  }

  changeMode(newMode: any): void {
    this.mode = newMode;
    this.generateCalendar();
  }

  prev(): void {
    if (this.mode === 'month') {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    } else if (this.mode === 'week') {
      this.currentDate.setDate(this.currentDate.getDate() - 7);
    }
    this.generateCalendar();
  }

  next(): void {
    if (this.mode === 'month') {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    } else if (this.mode === 'week') {
      this.currentDate.setDate(this.currentDate.getDate() + 7);
    }
    this.generateCalendar();
  }

  hasMeetingOnDate(date: Date): boolean {
    const newDate = new Date(date);
    if (this.mode === 'month') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (this.mode === 'week'){
      newDate.setDate(newDate.getDate());
    }
    const formattedDate = newDate.toISOString().split('T')[0];
    return this.meetings.some(meeting => meeting.date.split('T')[0] === formattedDate);
  }
  
}
