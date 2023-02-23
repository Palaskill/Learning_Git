import { Component ,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule,Validators,FormBuilder  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import { MatInputModule } from '@angular/material/input';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit{
  constructor (private router: Router) {}

  hide = true;
  identifiant = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.identifiant.hasError('required')) {
      return 'Please enter your identifiant';
    }
    if (this.password.hasError('required')) {
      return 'Please enter your password';
    };

    // return this.email.hasError('email') ? 'Not a valid email' : '';
    return;

  }
  submit(){
    if ((this.identifiant.hasError('required')) && (this.password.hasError('required'))){
      return ;
    }

    else {this.router.navigate(['/personnel'])}

  }

  ngOnInit(): void {

  }

}
