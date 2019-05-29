import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  favorites: any[];
  showing: boolean = false;
  buttonText: string ="More Info...";
  @Input() shouldBeHidden: boolean;
  @Input() eventInfo: any[];
  // @Output() onToggleFav = new EventEmitter<any>();
  @Input() filteredData: any [];
  @Output() onEventToggle = new EventEmitter<any>();



  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
  // method to add favorites to favorite array
  addFavorite(favEvent) {
    console.log(favEvent);
    console.log("add fav");
    this.apiService.favoriteEvent(favEvent);
  }

  // changes color of heart icon when clicked
  color (index: number) {
    console.log(index);
    this.eventInfo[index].clicked = true;
  }

  // brings up more info for user to see
  moreInfo(index: number): void {
    this.onEventToggle.emit(index);
    this.buttonText = "Go Back";
    this.showing = !this.showing;
  }
}


