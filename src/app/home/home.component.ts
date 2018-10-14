import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/userService.service';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  totalRec : number;
  page: number = 1;
  constructor(private service: UserServiceService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.getData().map((response: Response) => response.json()).subscribe(data => {
      this.items = data;
      this.totalRec = this.items.length;
      console.log(data);
    });
  }
}
