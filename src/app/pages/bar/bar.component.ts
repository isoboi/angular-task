import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { alertText, calculateWidth } from '@core/helpers';
import { Numbers } from '@core/enums/numbers';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnChanges {

  @Input()
  public totalCapacity: number = 0;

  @Input()
  public allocatedCapacity: number = 0;

  @Input()
  public usedCapacity: number = 0;

  public allocatedWidth = 0;

  public usedWidth = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.totalCapacity > this.allocatedCapacity && this.allocatedCapacity > this.usedCapacity) {
      this.allocatedWidth = calculateWidth(this.totalCapacity, this.allocatedCapacity);
      this.usedWidth = calculateWidth(this.allocatedCapacity, this.usedCapacity);
    } else {
      alert(alertText);
    }
  }

  get isAllocatedWidthBig(): boolean {
    return this.allocatedWidth > Numbers.TEN;
  }

  get isUsedWidthBig(): boolean {
    return this.usedWidth > Numbers.TEN;
  }

  get isUsedWidthSmall(): boolean {
    return this.usedWidth < 95;
  }
}
