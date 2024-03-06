import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-realizar-pago',
  templateUrl: './realizar-pago.component.html',
  styleUrls: ['./realizar-pago.component.css']
})
export class RealizarPagoComponent {

  pagoForm: FormGroup= new FormGroup({
    titular: new FormControl('',[Validators.required]),
    numero: new FormControl(null,[Validators.required]),
    fecha: new FormControl(null,[Validators.required]),
    cvv: new FormControl(null,[Validators.required]),
    
  })

}
