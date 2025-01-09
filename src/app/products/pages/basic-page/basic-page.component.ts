import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower:string ='eduardo';

  public nameUpper:string ='EDUARDO';

  public fullName:string ='EduARdo GoNzALes';

  public customDate: Date = new Date();

}
