import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncomman-page',
  templateUrl: './uncomman-page.component.html',
  styleUrl: './uncomman-page.component.css',
})
export class UncommanPageComponent {
  //118n Select
  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  changeClient(): void {
    this.name = 'Rocio';
    this.gender = 'female';
  }

  //i18n plural
  public clients: string[] = [
    'Juan',
    'Luis',
    'Rodrigo',
    'Yesenia',
    'Alexandra',
    'Rocio',
  ];
  public clientsMap = {
    '=0': 'No tengo ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    //Remueve el primer elemento
    this.clients.shift();
    console.log(this.clients);
  }

  //Keuvaluoe pipe
  public person = { name: 'Carlos', age: '40', address: 'Av. Carrión 2356' };

  //Async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
