import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ticketApiKey: string = "u0GkAWD7BmZxAM9fjkaula4mnTPTQXnX";
  tempLocation: string = "Detroit";
  arts: string = "Arts & Theatre";

  // eventInfo: any []= [];
  favorites: any[] = [];

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
  getComedy() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Comedy&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
    getMLB() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=MLB&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
  getNFL() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=NFL&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
  getMusic() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }
  getTheatre() {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Theatre&city=${this.tempLocation}&apikey=${this.ticketApiKey}`);
  }

  favoriteEvent(favEvent) {
    console.log(favEvent);
    this.favorites.push(favEvent);
  }

  listFavorites() {
    console.log("show favs");
    return this.favorites;
  }

  unfavoriteEvent(index: number) {
    this.favorites.splice(index, 1);
    return this.favorites;
  }

}
 