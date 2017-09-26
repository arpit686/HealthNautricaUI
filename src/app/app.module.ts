import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@Angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from'@angular/forms'
import { SurgeryComponent } from "./surgery/surgery.component";
import { PatientInfoComponent } from "./surgery/patient-info-surgery/patient-info-surgery.component";

@NgModule({
  declarations: [
    AppComponent,
    SurgeryComponent,
    PatientInfoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

