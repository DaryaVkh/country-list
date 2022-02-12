import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import { DecreasePageNumber, IncreasePageNumber } from 'src/app/store/main-page/main-page.actions';
import {MainPageState} from '../../../store/main-page/main-page.state';
import {IMainPageState} from '../../../store/main-page/main-page.model';

@Component({
  selector: 'app-page-control-panel',
  templateUrl: './page-control-panel.component.html',
  styleUrls: ['./page-control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageControlPanelComponent {
  @Select(MainPageState) mainPageState$: Observable<IMainPageState>;

  @Input() countriesLength: number;

  constructor(private store: Store) {}

  goToPrevPage() {
    this.store.dispatch(new DecreasePageNumber());
  }

  goToNextPage() {
    this.store.dispatch(new IncreasePageNumber());
  }
}
