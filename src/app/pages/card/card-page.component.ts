import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryState} from '../../store/country/country.state';
import {Select} from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import {ICountryState} from '../../store/country/country.models';
import {takeUntil} from 'rxjs/operators';
import {ICountryResponse, ILanguage} from '../../entities/api/country/country.interfaces';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPageComponent implements OnInit, OnDestroy {
  @Select(CountryState) countriesState$: Observable<ICountryState>;

  country: ICountryResponse;
  languages: string;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const code = this.route.snapshot.params['code'];

    this.countriesState$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((countryState: ICountryState) => {
      [ this.country ] = countryState.countries.filter((country) => country.code === code);
      this.languages = this.country.languages.map((language: ILanguage) => language.name).toString();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
