import { Component, Input, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MyErrorStateMatcher } from '../main/main.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() name: string = "";
  @Input() type: string = "text";
  @Input() errors: MyErrorStateMatcher = new MyErrorStateMatcher();
  @Input() fControl: FormControl = new FormControl();
  @Input() placeHolder: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
