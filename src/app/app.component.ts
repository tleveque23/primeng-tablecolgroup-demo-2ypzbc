import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sales: any[];

  lastYearTotal: number;

  thisYearTotal: number;

  ngOnInit() {
    this.sales = [
      {
        product: 'Bamboo Watch',
        lastYearSale: 51,
        thisYearSale: 40,
        lastYearProfit: 54406,
        thisYearProfit: 43342,
        result: [ 2345 ]
      },
      {
        product: 'Black Watch',
        lastYearSale: 83,
        thisYearSale: 9,
        lastYearProfit: 423132,
        thisYearProfit: 312122,
        result: [ 2345]
      },
      {
        product: 'Blue Band',
        lastYearSale: 38,
        thisYearSale: 5,
        lastYearProfit: 12321,
        thisYearProfit: 8500,
        result: [ 2345]
      },
      {
        product: 'Blue T-Shirt',
        lastYearSale: 49,
        thisYearSale: 22,
        lastYearProfit: 745232,
        thisYearProfit: 65323,
        result: [ 2345]
      },
      {
        product: 'Brown Purse',
        lastYearSale: 17,
        thisYearSale: 79,
        lastYearProfit: 643242,
        thisYearProfit: 500332,
        result: [ 2345]
      },
      {
        product: 'Chakra Bracelet',
        lastYearSale: 52,
        thisYearSale: 65,
        lastYearProfit: 421132,
        thisYearProfit: 150005,
        result: [ 2345]
      },
      {
        product: 'Galaxy Earrings',
        lastYearSale: 82,
        thisYearSale: 12,
        lastYearProfit: 131211,
        thisYearProfit: 100214,
        result: [ 2345]
      },
      {
        product: 'Game Controller',
        lastYearSale: 44,
        thisYearSale: 45,
        lastYearProfit: 66442,
        thisYearProfit: 53322,
        result: [ 2345]
      },
      {
        product: 'Gaming Set',
        lastYearSale: 90,
        thisYearSale: 56,
        lastYearProfit: 765442,
        thisYearProfit: 296232,
        result: [ 2345]
      },
      {
        product: 'Gold Phone Case',
        lastYearSale: 75,
        thisYearSale: 54,
        lastYearProfit: 21212,
        thisYearProfit: 12533,
        result: [ 2345]
      },
    ];

    this.calculateLastYearTotal();
    this.calculateThisYearTotal();
  }

  calculateLastYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.lastYearProfit;
    }

    this.lastYearTotal = total;
  }

  calculateThisYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.thisYearProfit;
    }

    this.thisYearTotal = total;
  }

  addColumn() {
    this.sales.forEach( s => {
      if ( !s.result ) {
        s.result = [];
      }

      s.result.push(this.getRandomArbitrary(0, 99999));
    })
  }

  private getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
