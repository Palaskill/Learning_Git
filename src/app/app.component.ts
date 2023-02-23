import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app2';
  temp : any ;
  constructor(){}
  ngOnInit(): void {

  }
}


