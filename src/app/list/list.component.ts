import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
items = [
  {name:"apple", price:"$.35"},
  {name:"banana", price:"$.45"},
  {name:"orange", price:"$.55"},
  {name:"pear", price:".65"}
]

things = [
  "toy",
  "food",
  "girl"
]
  constructor() { }

  ngOnInit(): void {
  }

}
