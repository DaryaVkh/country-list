import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {CountryState} from '../../store/country/country.state';
import {Observable, Subject} from 'rxjs';
import {ICountryState} from '../../store/country/country.models';
import {takeUntil} from 'rxjs/operators';
import {ICountryResponse} from '../../entities/api/country/country.interfaces';
import {MainPageState} from 'src/app/store/main-page/main-page.state';
import {IMainPageState} from 'src/app/store/main-page/main-page.model';
import {ISelectorOption} from 'src/app/entities/pages/main/main.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit, OnDestroy {
  @Select(CountryState) countryState$: Observable<ICountryState>;
  @Select(MainPageState) mainPageState$: Observable<IMainPageState>;

  countries: ICountryResponse[] = [];
  mainPageState: IMainPageState = {
    countryNameFilter: '',
    currencyFilter: [],
    continentFilter: '',
    currentPage: 1,
  };
  filteredCountries: ICountryResponse[] = [];

  private destroy$: Subject<void> = new Subject();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.countryState$.pipe(
      takeUntil(this.destroy$),
    ).subscribe((countryState: ICountryState) => {
      this.countries = countryState.countries;
      this.filterCountries(this.mainPageState);
    });
    this.mainPageState$.pipe(
      takeUntil(this.destroy$),
    ).subscribe((mainPageState: IMainPageState) => {
      this.mainPageState = mainPageState;
      this.filterCountries(mainPageState);
    });
  }

  private filterCountries(mainPageState: IMainPageState) {
    this.filteredCountries = this.filterCountriesByName(this.countries, mainPageState.countryNameFilter);
    this.filteredCountries = this.filterCountriesByCurrency(this.filteredCountries, mainPageState.currencyFilter);
    this.filteredCountries = this.filterCountriesByContinent(this.filteredCountries, mainPageState.continentFilter);
    this.cdr.detectChanges();
  }

  private filterCountriesByName(countries: ICountryResponse[], countryName: string): ICountryResponse[] {
    return countries.filter((country: ICountryResponse) => country.name.toLowerCase().includes(countryName));
  }

  private filterCountriesByCurrency(countries: ICountryResponse[], currencies: ISelectorOption[]): ICountryResponse[] {
    return countries.filter((country: ICountryResponse) => {
      if (!currencies.length) {
        return true;
      }
      let countryCurrencies = (country.currency || '-').split(',');
      let currencyNames = currencies.map((currency: ISelectorOption) => currency.name);
      return currencyNames.every((item) => countryCurrencies.includes(item));
    });
  }

  private filterCountriesByContinent(countries: ICountryResponse[], continent: string): ICountryResponse[] {
    if (continent === '') {
      return countries;
    }
    return countries.filter((country: ICountryResponse) => country.continent.name === continent);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
