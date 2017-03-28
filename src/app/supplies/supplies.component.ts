import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  supplies = [{
    type: 'flowers',
    instock: 8,
    description: 'Inseason Plants of various sizes'

  },
  {
  type: 'trees',
  instock: 22,
  description: 'Various Trees'
}];

  constructor() { }

  ngOnInit() {
  }

}
