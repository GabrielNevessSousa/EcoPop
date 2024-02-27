import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.userService.loginUser(credentials).subscribe({
        next: (response) => {
          console.log('Inicio de sesión exitoso', response);
          this.loginForm.reset();
          alert(`Inicio de sesión con éxito`);
          // Puedes redirigir a la página principal o a otra página después del inicio de sesión
          this.router.navigateByUrl('/pag-principal');
        },
        error: (error) => {
          alert('Error durante el inicio de sesión');
          // Puedes mostrar un mensaje de error al usuario, como alerta, etc.
        }
      });
    }
  }
}