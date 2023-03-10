import { Component ,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule,Validators,FormBuilder  } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Form Validables
  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder){}
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }

  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
    }

}
