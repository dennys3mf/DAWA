import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../post-data';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  constructor(private ruta: ActivatedRoute) { }
  
  post = posts[parseInt(this.ruta.snapshot.params['id'])]
}
