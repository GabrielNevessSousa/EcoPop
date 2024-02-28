import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  userData: any;
  usuarioForm: FormGroup; // Definir FormGroup

  constructor(private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        this.userData = data;
        this.initForm(); // Inicializa el formulario cuando los datos del usuario estén disponibles
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  initForm() {
    this.usuarioForm = this.formBuilder.group({
      nombre: [this.userData.name, Validators.required], // Asigna el valor del nombre de usuario y establece la validación
      apellidos: [this.userData.apellidos, Validators.required], // Asigna el valor de los apellidos de usuario y establece la validación
      email: [this.userData.email, [Validators.required, Validators.email]], // Asigna el valor del email de usuario y establece la validación
      contra: ['', Validators.required] // Define la validación para la contraseña
    });
  }

  submitForm(){
    
  }

}
