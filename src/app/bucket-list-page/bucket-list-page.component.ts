import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})
export class BucketListPageComponent implements OnInit {


  showing: boolean = false;

  @Input() favorites: any;
  @Input() shouldBeHidden: boolean;
  @Output() onEventToggle = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
// on load, shows favorites array
  ngOnInit() {
    this.favorites = this.apiService.listFavorites();
    console.log("list favs");   
  }
// deletes favorites
  deleteFavorite(index: number) {
    this.favorites = this.apiService.unfavoriteEvent(index);
  }
  // toggles more info to show
  moreInfoFav(index: number): void {
    this.favorites[index].shouldBeHidden = !this.favorites[index].shouldBeHidden;
    this.showing = !this.showing;
  }
}
