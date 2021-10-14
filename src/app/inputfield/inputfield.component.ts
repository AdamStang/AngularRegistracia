import { Component, Input, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MyErrorStateMatcher } from '../main/main.component';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent implements OnInit {

  @Input() name: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";
  @Input() errors: MyErrorStateMatcher = new MyErrorStateMatcher();
  @Input() fControl: FormControl = new FormControl();
  @Input() eMessage: String = "";
  @Input() placeholder: string = "";
  @Input() maxLen: any = null;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
