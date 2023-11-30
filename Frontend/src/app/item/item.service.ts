import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  songs: any[] = [];
  currentSong: any = {};

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.itemService.getItems()
      .subscribe((songs) => {
        this.songs = songs;
      });
  }

  getItemById(id: string): void {
    this.itemService.getItemById(id)
      .subscribe((item) => {
        this.currentSong = item;
      });
  }

  createItem(item: any): void {
    this.itemService.createItem(item)
      .subscribe(() => {
        this.getSongs();
        this.currentSong = {};
      });
  }

  updateItem(id: string, item: any): void {
    this.itemService.updateItem(id, item)
      .subscribe(() => {
        this.getSongs();
        this.currentSong = {};
      });
  }

  deleteItem(id: string): void {
    this.itemService.deleteItem(id)
      .subscribe(() => {
        this.getSongs();
      });
  }

  editItem(id: string): void {
    this.getItemById(id);
  }
}
