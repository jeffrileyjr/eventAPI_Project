import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [ApiService]
})
export class EventListComponent implements OnInit {

  @Input() eventInfo: any[];
  // @Input() favorites: any[];

  constructor(private apiService: ApiService) { }

  favorites: any[] = [];

  ngOnInit() {
  }

  addFavorite(index: number) {
    this.favorites = this.apiService.favoriteEvent(index);
    console.log(event);
    console.log(this.favorites);
  }


}
