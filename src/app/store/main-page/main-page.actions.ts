import {ISelectorOption} from 'src/app/entities/pages/main/main.interfaces';

export class IncreasePageNumber {
  static readonly type = '[MAIN] Increase page number';
}

export class DecreasePageNumber {
  static readonly type = '[MAIN] Decrease page number';
}

export class ChangeCountryNameFilter {
  static readonly type = '[MAIN] Change country name filter';
  constructor(readonly countryName: string) {}
}

export class ChangeCurrencyFilter {
  static readonly type = '[MAIN] Change currency filter';
  constructor(readonly currencies: ISelectorOption[]) {}
}

export class ChangeContinentFilter {
  static readonly type = '[MAIN] Change continent filter';
  constructor(readonly continent: string) {}
}
