import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  user: any;
  userForm: FormGroup;

  
  constructor(private userService: UsersService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      contra: ['']
    });
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
      this.userForm.patchValue(data);
    });
  }

  onSubmit() {
    this.userService.updateUser(this.userForm.value).subscribe(response => {
      console.log(response.message);
    });
  }
}
