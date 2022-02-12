import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  query<T = any>(query: any, variables?: any) {
    return this.apollo.query<T>({
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
      query,
      variables,
    });
  }
}
