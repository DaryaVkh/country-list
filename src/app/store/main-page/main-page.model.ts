import {ISelectorOption} from 'src/app/entities/pages/main/main.interfaces';

export interface IMainPageState {
  countryNameFilter: string;
  currencyFilter: ISelectorOption[];
  continentFilter: string;
  currentPage: number;
}
