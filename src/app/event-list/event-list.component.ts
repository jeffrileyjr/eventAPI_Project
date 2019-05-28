import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: []
})
export class EventListComponent implements OnInit {

  favorites: any[];

  @Input() eventInfo: any[];
  @Output() onToggleFav = new EventEmitter<any>();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  addFavorite(favEvent) {
    this.apiService.favoriteEvent(favEvent);
  }

  // toggle(index: number) {
  //   this.eventInfo[index].isFavorite = !this.eventInfo[index].isFavorite;
  //   console.log(index);
  // }

  color (index: number) {
    console.log(index);
    this.eventInfo[index].clicked = true;
  }
}
