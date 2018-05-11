import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalDetailsPage } from '../cal-details/cal-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendars = [];
  constructor(private calendar: Calendar, public navCtrl: NavController, private plt : Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      })
    })
  }
  addEvent(cal) {
    let startDate = new Date();
    let endDate = new Date();
    let options = { 
      calendarId: cal.id,
      calendarName: cal.name,  
      firstReminderMinutes: 15
    };
    this.calendar.createEventInteractivelyWithOptions('Un nou event','Vic','Això es un event nou',startDate,endDate,options)
    .then(() => {});
  }
  openCal(cal) {
    this.navCtrl.push(CalDetailsPage , cal);
  }
 
}
