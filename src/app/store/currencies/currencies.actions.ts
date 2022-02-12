import { ISelectorOption } from 'src/app/entities/pages/main/main.interfaces';
import {IFilterInput} from '../../entities/api/country/country.interfaces';

export class QueryCurrencies {
  static readonly type = '[MAIN] Query currencies';
  constructor(readonly filter?: IFilterInput) {}
}

export class FilterByCurrency {
  static readonly type = '[MAIN] Filter by currency'
  constructor(readonly options: ISelectorOption[]) {}
}
