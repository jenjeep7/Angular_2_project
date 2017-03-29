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
    description: 'Inseason Plants of various sizes',
    Price: 13.99

  },
  {
  type: 'trees',
  instock: 22,
  description: 'Various Trees',
  Price: 50
},
{
  type: 'potting soil',
  instock: 0,
  description: 'Potting soil',
  Price: 5.99
}];

totalItems() {
  let total = 0;
  for(let item of this.supplies) {
    total += item.instock;
  }
  return total;
}
  constructor() { }

  ngOnInit() {
  }

}
