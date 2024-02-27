import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarioForm: FormGroup= new FormGroup({
    imagen: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    contra: new FormControl('',[Validators.required]),
  })

}
