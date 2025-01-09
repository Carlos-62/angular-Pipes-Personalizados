import { Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  public isUpperCase: boolean = false
  public orderBy: keyof Hero | undefined = undefined; 

  public heroes: Hero[] =[
    {
      name: 'superman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.blue,
    },
    {
      name: 'wolveri',
      canFly: true,
      color: Color.green,
    },  {
      name: 'hombre araña',
      canFly: true,
      color: Color.red,
    }
  ];

  //si esta en v lo pase a f y viceversa
  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder (value: keyof Hero){
    this.orderBy = value
  }

}
