import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() eventInfo: any[];
  @Input() filteredData: any [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

}
