import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isFactory } from '@angular/core/src/render3/interfaces/injector';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ticketApiKey: string = "u0GkAWD7BmZxAM9fjkaula4mnTPTQXnX";
  favorites: any[] = [];

  constructor(private http: HttpClient) { }

  getTicketmasterData(eventSearch: string) {
    return this.http.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${eventSearch}&apikey=${this.ticketApiKey}`);
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
 