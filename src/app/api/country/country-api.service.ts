import {Injectable} from '@angular/core';
import {ApolloQueryResult} from '@apollo/client';
import {Observable} from 'rxjs';
import {
  IFilterInput,
  ICountryWrapperResponse
} from 'src/app/entities/api/country/country.interfaces';
import {ApiService} from '../api.service';
import {queryCountry} from './queries/country.gql';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  constructor(private apiService: ApiService) {}

  queryCountry(variables?: IFilterInput): Observable<ApolloQueryResult<ICountryWrapperResponse>> {
    return this.apiService.query<ICountryWrapperResponse>(queryCountry, variables);
  }
}
