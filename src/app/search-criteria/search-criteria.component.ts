import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";


@Component({
  selector: 'search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [ ApiService ]
})
export class SearchCriteriaComponent implements OnInit {

  eventInfo: any[] = [];
  // filteredData: any[] = [];


  constructor(private apiService: ApiService) { 
    // this.eventInfo = this.apiService.getTicketmasterData(eventSearch);
  }

  ngOnInit() {
    this.apiService.loadTicketmasterData().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
  });
  }


  searchTicketmaster(form) {
    this.apiService.getTicketmasterData(form.value.eventSearch).subscribe(response => {
        this.eventInfo = response["_embedded"].events;
        console.log(response);
        return this.eventInfo;
    });
    form.resetForm();
  }
  changeLocation(event) {
    this.apiService.changeLocationData(event);
    this.apiService.loadTicketmasterData().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }

  filterByDate() {
    
  }
  filterByPrice() {
    
  }
filterByLocation  () {
  
}
}
