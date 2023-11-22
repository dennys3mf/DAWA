import { Component, OnInit } from '@angular/core';
import { users } from '../users-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = users

  constructor() { }

  ngOnInit(): void {
  }
}
