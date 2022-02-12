import {Injectable} from '@angular/core';
import {Action, NgxsOnInit, State, StateContext, Store} from '@ngxs/store';
import {CountryApiService} from '../../api/country/country-api.service';
import {ICountryWrapperResponse} from '../../entities/api/country/country.interfaces';
import {EMPTY, switchMap} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';
import {ICountryState} from './country.models';
import {QueryCountry} from './country.actions';

@State<ICountryState>({
  name: 'countries',
  defaults: {
    countries: [],
  },
})
@Injectable()
export class CountryState implements NgxsOnInit {
  constructor(
    private countryApiService: CountryApiService,
    private store: Store
  ) {}

  ngxsOnInit() {
    this.store.dispatch(new QueryCountry());
  }

  @Action(QueryCountry)
  queryCountry({patchState}: StateContext<ICountryState>, {filter}: QueryCountry) {
    return this.countryApiService.queryCountry(filter).pipe(
      switchMap((res: ApolloQueryResult<ICountryWrapperResponse>) => {
        patchState({
          countries: res.data.countries,
        });
        return EMPTY;
      })
    );
  }
}
