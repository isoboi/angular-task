import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { alertText, calculateWidth } from '@core/helpers';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit, OnChanges {

  @Input() totalCapacity: number = 0;
  @Input() allocatedCapacity: number = 0;
  @Input() usedCapacity: number = 0;

  public allocatedWidth = 0;
  public usedWidth = 0;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.totalCapacity > this.allocatedCapacity && this.allocatedCapacity > this.usedCapacity) {
      this.allocatedWidth = calculateWidth(this.totalCapacity, this.allocatedCapacity);
      this.usedWidth = calculateWidth(this.allocatedCapacity, this.usedCapacity);
    } else {
      alert(alertText)
    }
  }

  ngOnInit(): void {

  }

  get isAllocatedWidthBig(): boolean {
    return this.allocatedWidth > 10
  }

  get isUsedWidthBig(): boolean {
    return this.usedWidth > 10
  }

  get isUsedWidthSmall(): boolean {
    return this.usedWidth < 95;
  }
}
