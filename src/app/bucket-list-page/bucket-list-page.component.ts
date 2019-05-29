import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})
export class BucketListPageComponent implements OnInit {

  shouldBeHidden: boolean = false;

  @Input() favorites: any;
  // apiService: any;
  // favorites: any[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.favorites = this.apiService.listFavorites();
    console.log("list favs");   
  }

  deleteFavorite(index: number) {
    this.favorites = this.apiService.unfavoriteEvent(index);
  }
  
  moreInfoFav(index: number): void {
    this.favorites[index].shouldBeHidden = !this.favorites[index].shouldBeHidden;
  }
}
