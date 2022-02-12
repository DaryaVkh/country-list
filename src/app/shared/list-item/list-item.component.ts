import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICountryResponse} from '../../entities/api/country/country.interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() country: ICountryResponse;
}
