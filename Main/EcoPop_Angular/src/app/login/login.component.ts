import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from 'src/Models/user.model';

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
  
          // Verificar si la respuesta tiene la propiedad 'success' y 'user'
          if (response.success && response.success.user) {
            const user = response.success.user;
            //const userId = user.id;

            console.log(user.id);
            const userEmail = user.email;
            const userToken = response.success.token;
  
            // Ejemplo: Almacenar en el almacenamiento local (localStorage)
           // localStorage.setItem('user', JSON.stringify({ id: userId, email: userEmail, token: userToken }));
          
            this.redirectBasedOnUserRole(user.rol);
            
            this.loginForm.reset();
            alert(`Inicio de sesión con éxito`);
          }
        },
        error: (error) => {
          alert('Error durante el inicio de sesión');
          // Puedes mostrar un mensaje de error al usuario, como alerta, etc.
        }
      });
    }
  }
  
  redirectBasedOnUserRole(rol: string) {
   
    switch (rol) {
      case 'admin':
        this.router.navigateByUrl('/admin');
        break;
      case 'usuari':
        this.router.navigateByUrl('/pag-principal');
        break;
    
    }
  }
}