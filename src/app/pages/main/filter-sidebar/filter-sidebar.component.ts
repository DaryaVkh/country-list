import {Component, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {first, Observable, Subject, takeUntil} from 'rxjs';
import {ISelectorOption} from 'src/app/entities/pages/main/main.interfaces';
import {ICountryState} from 'src/app/store/country/country.models';
import {CountryState} from 'src/app/store/country/country.state';
import {CurrenciesState} from 'src/app/store/currencies/currencies.state';
import {
  ChangeContinentFilter,
  ChangeCountryNameFilter,
  ChangeCurrencyFilter
} from 'src/app/store/main-page/main-page.actions';
import {MainPageState} from '../../../store/main-page/main-page.state';
import {IMainPageState} from '../../../store/main-page/main-page.model';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: 'filter-sidebar.component.html',
  styleUrls: ['filter-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSidebarComponent implements OnInit, OnDestroy {
  @Select(CountryState) countryState$: Observable<ICountryState>;
  @Select(CurrenciesState) currencies$: Observable<ISelectorOption[]>;
  @Select(MainPageState) mainPageState$: Observable<IMainPageState>;

  @ViewChild('selector') selector: ElementRef<HTMLSelectElement>;

  nameFilterController = new FormControl('');
  continentFilterControl = new FormControl('');
  continents: string[] = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Oceania'];

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.mainPageState$.pipe(
      first()
    ).subscribe((mainPageState: IMainPageState) => {
      this.nameFilterController.setValue(mainPageState.countryNameFilter);
      this.continentFilterControl.setValue(mainPageState.continentFilter);
    });
    this.nameFilterController.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value: string) => {
      this.store.dispatch(new ChangeCountryNameFilter(value.toLowerCase()));
    });

    this.continentFilterControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value: string) => {
      this.store.dispatch(new ChangeContinentFilter(value));
    });
  }

  onSelect(selectedOptions: ISelectorOption[]) {
    this.store.dispatch(new ChangeCurrencyFilter(selectedOptions));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
