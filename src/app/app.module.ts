import { Component ,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule,Validators,FormBuilder  } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from ‘@angular/material/icon’;
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { PersonnelComponent } from './personnel/personnel.component';
import { EquipementComponent } from './equipement/equipement.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const  appRoutes : Routes = [
  {path: 'personnel', component: PersonnelComponent},
  {path: '', component: NewLoginComponent},
  {path: 'equipement', component: EquipementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent,
    NewLoginComponent,
    PersonnelComponent,
    EquipementComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
