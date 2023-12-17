import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  register() {
    if (
      !this.registerData.username ||
      !this.registerData.password ||
      !this.registerData.confirmPassword
    ) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      this.registerData.password = '';
      this.registerData.confirmPassword = '';
      return;
    }

    if (this.registerData.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      this.registerData.password = '';
      this.registerData.confirmPassword = '';
      return;
    }

    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialChars.test(this.registerData.password)) {
      this.errorMessage =
        'La contraseña debe contener al menos un carácter especial';
      this.registerData.password = '';
      this.registerData.confirmPassword = '';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';

    this.auth.register(this.registerData).subscribe(
      (success) => {
        console.log('Registro exitoso');
        this.successMessage = 'Registro exitoso. ¡Bienvenido!';
        this.registerData.username = '';
        this.registerData.password = '';
        this.registerData.confirmPassword = '';
      },
      (err) => {
        console.error(err);
        this.errorMessage = 'Error en el registro. Inténtelo nuevamente.';
      }
    );
  }
}
