import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"],
  providers: [  ]
})
export class SearchCriteriaComponent implements OnInit {
  tempLocation: string = "DETROIT";
  eventInfo: any[] = [];
  shouldBeHidden: boolean = false;

  // filteredData: any[] = []
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.loadTicketmasterData().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }

  searchTicketmaster(form) {
    this.apiService
      .getTicketmasterData(form.value.eventSearch)
      .subscribe(response => {
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
      this.tempLocation = event;
      return this.eventInfo;
    });
  }

  filterByDate() {
    this.eventInfo.sort((a, b) => {
      if (a.dates.start.localDate > b.dates.start.localDate) {
        return 1;
      } else if (a.dates.start.localDate < b.dates.start.localDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  filterByPrice() {
    this.eventInfo.sort((a, b) => {
      if (a.priceRanges[0].min > b.priceRanges[0].min) {
        return 1;
      } else if (a.priceRanges[0].min < b.priceRanges[0].min) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  fetchComedy() {
    this.apiService.getComedy().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }
  fetchMLB() {
    this.apiService.getMLB().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }
  fetchNFL() {
    this.apiService.getNFL().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }
  fetchMusic() {
    this.apiService.getMusic().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }
  fetchTheatre() {
    this.apiService.getTheatre().subscribe(response => {
      this.eventInfo = response["_embedded"].events;
      console.log(response);
      return this.eventInfo;
    });
  }

  toggleDisplay(index: number): void {
    this.eventInfo[index].shouldBeHidden = !this.eventInfo[index].shouldBeHidden;
  }
  

  
}
