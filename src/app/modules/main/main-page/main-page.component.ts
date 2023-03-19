import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  public value: number = 0;
  public incrementValue: number = 1;
  constructor() {}

  public increment(): void {
    if (this.value >= 1) {
      this.incrementValue = this.value * 2;
    }
    const nextValue = confirm(
      `Current value: ${this.value}, Next value: ${this.incrementValue}`
    );
    if (nextValue) {
      this.value = this.incrementValue;
    }
  }
}
