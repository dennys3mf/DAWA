import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    this.openFieldsInNewWindow()
  }

  confirmSubmit() {
    if (confirm("¿Estás seguro de enviar el formulario?")) {
      this.onSubmit();
    }
  }

  openFieldsInNewWindow() {
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);

    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
            <html lang="es">
            <head>
                <title>Información del Formulario</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            </head>
            <body class="d-flex justify-content-center align-items-center vh-100">
                <div class="container text-center">
                    <h1 class="mb-4">Información del Formulario</h1>
                    <div class="mb-3">
                        <h2>Nombre:</h2>
                        <p>${this.nombre}</p>
                    </div>
                    <div class="mb-3">
                        <h2>Email:</h2>
                        <p>${this.email}</p>
                    </div>
                    <button class="btn btn-primary" onclick="window.close()">Regresar al Formulario</button>
                </div>
            </body>
            </html>
        `);
      newWindow.document.close();
    } else {
      console.error('No se pudo abrir la nueva ventana');
    }
  }




}
