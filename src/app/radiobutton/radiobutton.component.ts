import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

   @Input() buttons:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
