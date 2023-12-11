import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  // styleUrls: ['./pipes-example.component.scss']
  styles: [`
  `]
})
export class PipesExampleComponent implements OnInit {
  mobileNumbers: any = {
      mobile1: '9854320987',
      mobile2: '8876432010',
      mobile3: '9717470333'
  }

  emailIds: any = {
    mail_Id1: 'imparvezlm@gmail.com',
    mail_Id2: 'example@gmail.com',
    mail_Id3: 'parvez.alam@gmail.com',
    mail_Id4: 'info.angular@gmail.com'
  }


  mySub!: Subscription;
  myOb: any = new Observable((obj) => {
    obj.next('1');
    obj.next('2');
    obj.next('3');
    obj.next('4');
    obj.next('5');
    obj.complete() 
  })

  myObser = {
    next: (x:any) => console.log("first:" + x),
    error: (err:any) => console.log('error' + err),
    complete: () => console.log('compolete')
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.mySub = this.myOb.Subscription(this.myObser);
    this.route.navigate(['/add', '2'])
  }  
}
