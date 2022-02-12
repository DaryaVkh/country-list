import {IFilterInput} from '../../entities/api/country/country.interfaces';

export class QueryCountry {
  static readonly type = '[MAIN] Query country';
  constructor(readonly filter?: IFilterInput) {}
}


