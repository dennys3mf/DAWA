import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../users-data';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  constructor(private ruta: ActivatedRoute) { }

  user = users[parseInt(this.ruta.snapshot.params['id'])]

}
