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

  addFavorite(favEvent) {
    console.log("add fav");
    this.apiService.favoriteEvent(favEvent);
  }


  color (index: number) {
    console.log(index);
    this.eventInfo[index].clicked = true;
  }

  
  moreInfo(index: number): void {
    this.onEventToggle.emit(index);
    this.buttonText = "Go Back";
    this.showing = !this.showing;
  }
  goBack(index: number):void {
    this.onEventToggle.emit(index);
    this.showing = !this.showing;
  }

}


