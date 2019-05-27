import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ticketApiKey: string = "u0GkAWD7BmZxAM9fjkaula4mnTPTQXnX";
  tempLocation: string = "266"

  // eventInfo: any []= [];

  constructor(private http: HttpClient) { }
  loadTicketmasterData() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }

  getTicketmasterData(eventSearch: string) {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${eventSearch}&dmaId=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
}
