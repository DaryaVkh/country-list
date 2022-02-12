import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-prev-arrow',
  templateUrl: './prev-arrow.component.html',
  styleUrls: ['./prev-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrevArrowComponent {
  @Input() isDisabled: boolean;
}
