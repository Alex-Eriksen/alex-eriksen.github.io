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
import { StatFieldComponent } from './components/stat-field/stat-field.component';
import { ScaleFieldComponent } from './components/scale-field/scale-field.component';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AngularMaterialModuleModule } from './modules/angular-material-module/angular-material-module.module';


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
    AngularMaterialModuleModule
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

