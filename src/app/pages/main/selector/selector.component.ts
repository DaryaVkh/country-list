import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {ISelectorOption} from 'src/app/entities/pages/main/main.interfaces';

@Component({
  selector: 'app-selector',
  templateUrl: 'selector.component.html',
  styleUrls: ['selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent implements OnChanges {
  @Input() options?: ISelectorOption[];

  @Output() selectValue = new EventEmitter<ISelectorOption[]>();

  selectedCount: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options'].currentValue) {
      this.selectedCount = 0;
      this.options.forEach((option) => {
        if (option.selected) {
          this.selectedCount++;
        }
      });
    }
  }

  onSelect(event$: Event) {
    const element = event$.currentTarget as HTMLElement;
    const index = element.dataset['index'];
    this.options[index].selected = !this.options[index].selected;
    this.selectedCount = this.options[index].selected ? this.selectedCount + 1 : this.selectedCount - 1;
    this.selectValue.emit(this.options.filter((option: ISelectorOption) => option.selected));
  }
}
