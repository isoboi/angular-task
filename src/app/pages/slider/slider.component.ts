import {
  ChangeDetectionStrategy,
  Component,
  ElementRef, HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnChanges{
  @Input()
  public value: number = 0;

  @Input()
  @HostBinding('style.width.%') width: number;

  @Input()
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';

  @Input()
  public showText: boolean = false;

  @Input()
  public isRoundedBorder: boolean = true;

  constructor(
    public el: ElementRef,
  ) {}


  ngOnChanges(changes: SimpleChanges) {
    this.el.nativeElement.style.setProperty('--borderRadius', this.isRoundedBorder ? '60px' : '0');
  }




}
