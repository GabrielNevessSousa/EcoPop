import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  submitted = false;

  registroForm: FormGroup= new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    apellidos: new FormControl(null,[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contra: new FormControl('',[Validators.required]),
    repetir: new FormControl('',[Validators.required]),
  })

  onSubmit() {
    this.submitted = true;
  }
}
