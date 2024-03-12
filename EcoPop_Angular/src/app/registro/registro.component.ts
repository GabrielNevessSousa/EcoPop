import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  const password = control.get('contra');
  const confirmPassword = control.get('repetir');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
}

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
  }, { validators: passwordMatchValidator })

  onSubmit() {
    this.submitted = true;
    this.registroForm.markAllAsTouched(); // Añade esta línea
    if (this.registroForm.valid) {
      // Aquí puedes añadir el código para enviar el formulario
    }
  }
}