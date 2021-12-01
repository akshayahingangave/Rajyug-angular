import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ProfilesComponent } from './appointment/profiles/profiles.component';
import { DetailsComponent } from './appointment/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './appointment/profiles/table/table.component';
import { InfoComponent } from './appointment/profiles/info/info.component';
import { BookingComponent } from './appointment/details/booking/booking.component';
import { VitalComponent } from './appointment/details/vital/vital.component';
import { VitalinfoComponent } from './appointment/details/vital/vitalinfo/vitalinfo.component';
import { NoteComponent } from './appointment/details/vital/note/note.component';
import { SelectComponent } from './appointment/details/booking/select/select.component';
import { FixComponent } from './appointment/details/booking/fix/fix.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    ProfilesComponent,
    DetailsComponent,
    TableComponent,
    InfoComponent,
    BookingComponent,
    VitalComponent,
    VitalinfoComponent,
    NoteComponent,
    SelectComponent,
    FixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
