import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ticketApiKey: string = "u0GkAWD7BmZxAM9fjkaula4mnTPTQXnX";
  tempLocation: string = "Detroit"

  // eventInfo: any []= [];

  constructor(private http: HttpClient) { }
  loadTicketmasterData() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }

  getTicketmasterData(eventSearch: string) {
    console.log(this.tempLocation);
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${eventSearch}&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
  changeLocationData(event: string) {
    this.tempLocation = event;
    console.log(event);
    return this.tempLocation;
  }
  
}
