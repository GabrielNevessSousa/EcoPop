import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent {


  direccionForm: FormGroup= new FormGroup({
    direccion: new FormControl('',[Validators.required]),
    ciudad: new FormControl('',[Validators.required]),
    provincia: new FormControl('',[Validators.required]),
    portal: new FormControl('',[Validators.required]),
    piso: new FormControl('',[Validators.required]),
    puerta: new FormControl('',[Validators.required]),
    postal: new FormControl('',[Validators.required]),
  })


}
