import { Component, OnInit } from '@angular/core';

interface presenting {
  name: string;
  mobile:string;
  dob:string;
}

const PRESENTS: presenting[] = [
  {
    name: 'JOHN WICK',
    mobile: '384884822',
    dob: '19/10/1993'
  },
  {
    name: 'JOHN WICK',
    mobile: '3848875321',
    dob: '12/02/1990'
  },
  {
    name: 'JOHN WICK',
    mobile: '3848848433',
    dob: '01/01/1983'
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  presents = PRESENTS;
}
