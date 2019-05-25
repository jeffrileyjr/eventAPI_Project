import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bucket-list-page',
  templateUrl: './bucket-list-page.component.html',
  styleUrls: ['./bucket-list-page.component.css']
})
export class BucketListPageComponent implements OnInit {

  @Input() favoriteEvent: any;
  // @Input() eventInfo: any;
  @Input() index: number;
  @Output() onAddFavorite = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
  }

  // addFavorite(index: number) {
  //   this.onAddFavorite.emit(index);
  // }

  addFavorite(index: number, object: any) {
    this.onAddFavorite.emit(this.favoriteEvent.target.attribute.innerHTML);
  }


}
