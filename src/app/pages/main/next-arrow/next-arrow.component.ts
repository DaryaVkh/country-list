import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-next-arrow',
  templateUrl: './next-arrow.component.html',
  styleUrls: ['./next-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextArrowComponent {
  @Input() isDisabled: boolean;
}
