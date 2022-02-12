import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryComponent {
  @Input() categoryName: string;
  @Input() categoryValue: string;
  @Input() orientation?: 'vertical' | 'horizontal' = 'horizontal';
}
