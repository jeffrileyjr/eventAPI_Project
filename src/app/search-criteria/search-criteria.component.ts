import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  eventInfo: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  searchTicketmaster(form) {
    this.apiService.getTicketmmasterData(form.value.eventSearch).subscribe(response => {
        this.eventInfo = response["_embedded"].events;
        console.log(response);
    });
    form.resetForm();
  }
}
