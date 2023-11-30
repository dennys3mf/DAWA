import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  songs: any[] = [];
  currentSong: any = {titulo: '', artista: '', genero: '', duracion: '', tempo: 0};
  form!: FormGroup;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getSongs();
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9áéíóúÁÉÍÓÚ\s ]+')]],
      artista: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9áéíóúÁÉÍÓÚ\s ]+')]],
      genero: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9áéíóúÁÉÍÓÚ\s ]+')]],
      duracion: ['', [Validators.required, Validators.pattern('^([0-5]?[0-9]):([0-5]?[0-9])$')]],
      tempo: ['', [Validators.required, Validators.min(60), Validators.max(180)]]
    });
  }

  getSongs(): void {
    this.itemService.getItems()
      .subscribe((songs) => {
        this.songs = songs;
      });
  }

  createItem(item: any): void {
    this.itemService.createItem(item)
      .subscribe(
        () => {
          Swal.fire('Creado', 'El elemento ha sido creado exitosamente', 'success');
          this.getSongs();
          this.currentSong = {};
          this.form.reset();
        },
        () => {
          Swal.fire('Error', 'Hubo un problema al crear el elemento', 'error');
        }
      );
  }
  
  updateItem(id: string, item: any): void {
    this.itemService.updateItem(id, item)
      .subscribe(
        () => {
          Swal.fire('Actualizado', 'El elemento ha sido actualizado exitosamente', 'success');
          this.getSongs();
          this.currentSong = {};
          this.form.reset();
        },
        () => {
          Swal.fire('Error', 'Hubo un problema al actualizar el elemento', 'error');
        }
      );
  }
  

  deleteItem(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemService.deleteItem(id)
          .subscribe(() => {
            Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
            this.getSongs();
          });
      }
    });
  }
  
  editItem(id: string): void {
    this.itemService.getItemById(id)
      .subscribe((item) => {
        this.currentSong = item;
        this.form.patchValue(item); 
      });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const item = this.form.value;
    if (this.currentSong._id) {
      this.updateItem(this.currentSong._id, item);
    } else {
      this.createItem(item);
    }
  }
}
