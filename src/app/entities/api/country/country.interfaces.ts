export interface IFilterInput {
  code?: IStringQueryOperatorInput;
  continent?: IStringQueryOperatorInput;
  currency?: IStringQueryOperatorInput;
}

export interface IStringQueryOperatorInput {
  eq?: string;
  glob?: String;
  in?: string[];
  ne?: string;
  nin?: string[];
  regex?: string;
}

export interface ICountryWrapperResponse {
  countries: ICountryResponse[];
}

export interface ICountryResponse {
  code: string;
  continent: IContinent;
  languages: ILanguage[];
  name: string;
  capital?: string;
  currency?: string;
}

export interface IContinent {
  name: string;
}

export interface ILanguage {
  name?: string;
}
