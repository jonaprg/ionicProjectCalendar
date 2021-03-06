import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar } from  '@ionic-native/calendar';
import { CalendarApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalDetailsPage } from '../pages/cal-details/cal-details';

@NgModule({
  declarations: [
    CalendarApp,
    HomePage,
    CalDetailsPage
  ],
  imports: [
    
    BrowserModule,
    IonicModule.forRoot(CalendarApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CalendarApp,
    HomePage,
    CalDetailsPage
  ],
  providers: [
    Calendar,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
