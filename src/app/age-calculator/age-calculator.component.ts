import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
})
export class AgeCalculatorComponent {
  ageCalculatorForm: FormGroup;
  invalidDate: boolean = false;
  days: number = 0;
  months: number = 0;
  years: number = 0;

  constructor() {
    this.ageCalculatorForm = new FormGroup({
      day: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(31),
        Validators.min(1),
      ]),
      month: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
        Validators.max(12),
        Validators.min(1),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.max(new Date().getFullYear()),
        Validators.min(1923),
      ]),
    });

    // Reset invalidDate
    this.ageCalculatorForm.valueChanges.subscribe(
      (value) => (this.invalidDate = false)
    );
  }

  calculate() {
    const date = `${this.ageCalculatorForm.controls['year'].value}-${this.ageCalculatorForm.controls['month'].value}-${this.ageCalculatorForm.controls['day'].value}`;

    if (!moment(date).isValid()) this.invalidDate = true;

    const millisecondsDate = moment().diff(date, 'milliseconds');
    this.years = moment.duration(millisecondsDate).years();
    this.months = moment.duration(millisecondsDate).months();
    this.days = moment.duration(millisecondsDate).days();
  }

  get formControls() {
    return this.ageCalculatorForm.controls;
  }

  hasError(control: string): boolean {
    return (
      (this.formControls[control]?.invalid &&
        (this.formControls[control]?.dirty ||
          this.formControls[control]?.touched)) ||
      this.invalidDate
    );
  }

  hasErrorRequired(control: string): boolean {
    return (
      this.hasError(control) && this.formControls[control].errors?.['required']
    );
  }

  hasErrorValidate(control: string): boolean {
    return (
      this.hasError(control) &&
      (this.formControls[control].errors?.['max'] ||
        this.formControls[control].errors?.['min'])
    );
  }
}