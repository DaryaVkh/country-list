import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {IFilterInput} from '../../entities/api/country/country.interfaces';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from '@apollo/client';
import {queryCurrencies} from './queries/currencies.gql';
import {ICurrenciesWrapperResponse} from '../../entities/api/currencies/currencies.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesApiService {
  constructor(private apiService: ApiService) {}

  queryCurrencies(variables?: IFilterInput): Observable<ApolloQueryResult<ICurrenciesWrapperResponse>> {
    return this.apiService.query<ICurrenciesWrapperResponse>(queryCurrencies, variables);
  }
}
