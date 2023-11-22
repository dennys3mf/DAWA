import { Component } from '@angular/core';
import { posts } from '../post-data';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  
  posts = posts

}
