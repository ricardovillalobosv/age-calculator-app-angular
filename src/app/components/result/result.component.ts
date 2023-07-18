import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() suffix: string = '';
  @Input() result: number = 0;

  get valueResult(): string | number {
    return this.result ? this.result : '--';
  }
}