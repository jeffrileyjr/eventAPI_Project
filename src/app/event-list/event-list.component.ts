import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: []
})
export class EventListComponent implements OnInit {

  // show: boolean = false;
  favorites: any[];

  @Input() eventInfo: any[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {

  }

  addFavorite(favEvent) {
    this.apiService.favoriteEvent(favEvent);
  }


}
