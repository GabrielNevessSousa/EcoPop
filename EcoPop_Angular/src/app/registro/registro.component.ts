import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  registroForm: FormGroup= new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    apellidos: new FormControl(null,[Validators.required]),
    email: new FormControl('',[Validators.required]),
    contra: new FormControl('',[Validators.required]),
    repetir: new FormControl('',[Validators.required]),
  })

}
