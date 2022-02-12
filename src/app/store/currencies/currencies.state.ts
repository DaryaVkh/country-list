import {Action, NgxsOnInit, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CurrenciesApiService} from '../../api/currencies/currencies-api.service';
import {QueryCurrencies} from './currencies.actions';
import {EMPTY, switchMap} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';
import {ICurrenciesWrapperResponse} from '../../entities/api/currencies/currencies.interfaces';
import { ISelectorOption } from 'src/app/entities/pages/main/main.interfaces';

@State<ISelectorOption[]>({
  name: 'currencies',
  defaults: [],
})
@Injectable()
export class CurrenciesState implements NgxsOnInit {
  constructor(
    private currenciesApiService: CurrenciesApiService,
    private store: Store
  ) {}

  ngxsOnInit() {
    this.store.dispatch(new QueryCurrencies());
  }

  @Action(QueryCurrencies)
  queryCurrencies({ setState }: StateContext<ISelectorOption[]>, action: QueryCurrencies) {
    return this.currenciesApiService.queryCurrencies(action.filter).pipe(
      switchMap((res: ApolloQueryResult<ICurrenciesWrapperResponse>) => {
        const countries = res.data.countries;
        const currencies = new Set(countries.map(c => (c.currency || '-').split(',')).reduce((a, b) => a.concat(b), []));
        const currenciesArray = Array.from(currencies);
        currenciesArray.sort();
        setState(currenciesArray.map((currency: string) => ({
          name: currency,
          selected: false,
        })));
        return EMPTY;
      })
    );
  }
}
