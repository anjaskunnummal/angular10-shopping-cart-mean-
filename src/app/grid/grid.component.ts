import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  images:any=["https://images.pexels.com/photos/3773584/pexels-photo-3773584.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3773579/pexels-photo-3773579.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"];

  constructor() { }

  ngOnInit() {
  }

}
