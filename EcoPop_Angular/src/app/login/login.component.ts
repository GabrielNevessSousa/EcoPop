import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;

  loginForm: FormGroup= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    contra: new FormControl('',[Validators.required]),
  })

  onSubmit() {
    this.submitted = true;
  }

}
