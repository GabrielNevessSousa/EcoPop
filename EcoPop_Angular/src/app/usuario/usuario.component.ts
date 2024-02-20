import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarioForm: FormGroup= new FormGroup({
    nombre: new FormControl(null,[Validators.required]),
    apellidos: new FormControl(null,[Validators.required]),
    email: new FormControl('',[Validators.required]),
    contra: new FormControl('',[Validators.required]),
  })

}
