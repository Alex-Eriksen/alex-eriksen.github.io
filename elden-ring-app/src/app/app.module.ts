import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, FirestoreSettings as FIRESTORE_SETTINGS, Firestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseLoadComponent } from './components/database-load/database-load.component';
import { AddItemComponent } from './components/add-equipment/add-item.component';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueComponent } from './components/value/value.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StatFieldComponent } from './components/stat-field/stat-field.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScaleFieldComponent } from './components/scale-field/scale-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseLoadComponent,
    AddItemComponent,
    StatFieldComponent,
    ValueComponent,
    ScaleFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearence: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit
{
  constructor(private firestore: Firestore) {}

  ngOnInit(): void
  {
    if (environment.emulator)
    {
      connectFirestoreEmulator(this.firestore, "localhost", 8081);
    }
  }
}

