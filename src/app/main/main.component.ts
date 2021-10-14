import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StepperOrientation } from '@angular/cdk/stepper';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  editable: boolean = true;
  orientation: StepperOrientation = 'horizontal';
  value = '';
  valueSur = '';
  valueDate = '';
  valueEmail = '';
  valueTelC = '';
  valueObec = '';
  valueUlica = '';
  valuePSC = '';

  radioButtons = ["Muž", "Žena"];

  horLinSwitch(){
    if (innerWidth <= 600) {
      this.orientation = "vertical";
    }else{
      this.orientation = "horizontal";
    }
  }
  
  onResize(event: any) {
    const innerWidth = event.target.innerWidth;
    console.log(innerWidth);

    this.horLinSwitch();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-z0-9]{5,50}@[A-Za-z]{3,15}.[A-Za-z]{2,10}")
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]{10}")
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-zÀ-ž]+")
  ]);
  priezviskoFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-zÀ-ž]+")
  ]);
  rodnecFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]{6}\/[0-9]{4}")
  ]);
  datepicFormControl = new FormControl('', [
    Validators.required
  ]);
  ulicaFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-zÀ-ž0-9,]+")
  ]);
  obecFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[A-Za-zÀ-ž]+")
  ]);
  pscFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]+")
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.horLinSwitch();
  }

}
