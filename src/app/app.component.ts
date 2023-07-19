import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  obj: any = {
    'name': 'jhon',
    'age': 28,
    'company': 'cognizant',
    'designation': 'angular developer'
  }

  ngOnInit(): void {
    this.printData('table')
  }

  printData(id: string) {
    for (let item in this.obj) {
      let tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item}</td>
        <td>${this.obj[item]}</td>
      `;
      document.getElementById(id)?.appendChild(tr);
    }

  }

}
