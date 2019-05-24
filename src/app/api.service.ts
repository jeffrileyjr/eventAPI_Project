import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ticketApiKey: string = "u0GkAWD7BmZxAM9fjkaula4mnTPTQXnX";

  constructor(private http: HttpClient) { }

  getTicketmmasterData(eventSearch: string) {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${eventSearch}&apikey=${this.ticketApiKey}`);
  }
}
