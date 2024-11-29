import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calender-component',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './calender-component.component.html',
  styleUrl: './calender-component.component.scss'
})
export class CalenderComponentComponent implements OnInit {

  today = new Date();
  displayedMonth:any;
  displayedYear: any;
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
  months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  days?: number [];
  selectedDate: Date = new Date();
  

  ngOnInit(): void {
    this.updateDateDisplay(this.today, '')
  }

  updateDateDisplay(date: any, direction: string) {
    const currentDate = date.getDate();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const range = 2;
    this.days = this.generateDaysArray(currentDate, range, daysInMonth);
    this.displayedMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    this.displayedYear = date.getFullYear();
    let dateChange = 0;
    if (direction === 'right') {
      dateChange = 1;
    } else if (direction === 'left') {
      dateChange = -1;
    }
    if (dateChange !== 0) {
      this.selectedDate.setDate(this.selectedDate.getDate() + dateChange);
    } else if (direction === 'today') {
      this.selectedDate = this.today;
    }
  }
  
  generateDaysArray(currentDate: number, range: number, daysInMonth: number): number[] {
    const days = [];
    for (let i = range; i > 0; i--) {
      const day = currentDate - i;
      days.push(day > 0 ? day : daysInMonth + day);
    }
    days.push(currentDate);
    for (let i = 1; i <= range; i++) {
      const day = currentDate + i;
      days.push(day <= daysInMonth ? day : day - daysInMonth);
    }
    return days;
  }

  hasMeetingOnDay(day: number): boolean {
    const currentMonth = this.months.indexOf(this.displayedMonth);
    const currentYear = this.displayedYear;
    return this.meetings.some(meeting => {
      const meetingDate = new Date(meeting.date);
      return meetingDate.getDate() === day &&
             meetingDate.getMonth() === currentMonth &&
             meetingDate.getFullYear() === currentYear;
    });
  }
  

  get meetingsForSelectedDate(): any[] {
    return this.meetings.filter((meeting) => {
      const meetingDate = new Date(meeting.date);
      const selectedDate = new Date(this.selectedDate);
      return (
        meetingDate.getDate() === selectedDate.getDate() &&
        meetingDate.getMonth() === selectedDate.getMonth() && 
        meetingDate.getFullYear() === selectedDate.getFullYear()
      );
    });
  }
  

  get isTomorrow() {
    const todayDate = new Date(this.today);
    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(todayDate.getDate() + 1); 
    const isTomorrow = tomorrowDate.toDateString() === this.selectedDate.toDateString();
    return isTomorrow;
  }


  dateClickHandler(day: any) {
    const currentMonth = this.months.indexOf(this.displayedMonth) 
    this.selectedDate = new Date( this.displayedYear , currentMonth, day);
  }
  

  todayClickHandler(){
    this.updateDateDisplay(this.today, 'today')
    // this.selectedDate = this.today
  }

  viewAllHandler(){
    // opens a pop up of deatil date calender
    
  }

  leftRightClickHandler(side: string) {
    const newDate = new Date(this.selectedDate);
    const dateChange = side === 'right' ? 1 : -1;
    const nextDay = newDate.getDate() + dateChange;
    const isNextDayValid = this.days?.includes(nextDay);
    if (isNextDayValid) {
      newDate.setDate(newDate.getDate() + dateChange);
      this.selectedDate = newDate;
    } else {
      newDate.setDate(newDate.getDate() + dateChange);
      this.updateDateDisplay(newDate, side);
    }
  }
  

}