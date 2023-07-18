import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ButtonComponent } from './components/button/button.component';
import { ResultComponent } from './components/result/result.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputErrorComponent,
    ButtonComponent,
    ResultComponent,
    AgeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
