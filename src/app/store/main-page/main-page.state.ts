import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {
  ChangeContinentFilter,
  ChangeCountryNameFilter,
  ChangeCurrencyFilter,
  DecreasePageNumber,
  IncreasePageNumber
} from './main-page.actions';
import {IMainPageState} from './main-page.model';

@State<IMainPageState>({
  name: 'mainPage',
  defaults: {
    countryNameFilter: '',
    currentPage: 1,
    currencyFilter: [],
    continentFilter: '',
  },
})
@Injectable()
export class MainPageState {
  @Action(IncreasePageNumber)
  increasePageNumber({patchState, getState}: StateContext<IMainPageState>) {
    const prevPageNumber = getState().currentPage;
    patchState({
      currentPage: prevPageNumber + 1,
    });
  }

  @Action(DecreasePageNumber)
  decreasePageNumber({patchState, getState}: StateContext<IMainPageState>) {
    const prevPageNumber = getState().currentPage;
    patchState({
      currentPage: prevPageNumber - 1,
    });
  }

  @Action(ChangeCountryNameFilter)
  changeCountryNameFilter(
    {patchState}: StateContext<IMainPageState>,
    {countryName}: ChangeCountryNameFilter
  ) {
    patchState({
      countryNameFilter: countryName,
      currentPage: 1,
    });
  }

  @Action(ChangeCurrencyFilter)
  changeCurrencyFilter(
    {patchState}: StateContext<IMainPageState>,
    {currencies}: ChangeCurrencyFilter
  ) {
    patchState({
      currencyFilter: currencies,
      currentPage: 1,
    });
  }

  @Action(ChangeContinentFilter)
  changeContinentFilter(
    {patchState}: StateContext<IMainPageState>,
    {continent}: ChangeContinentFilter
  ) {
    patchState({
      continentFilter: continent,
      currentPage: 1,
    });
  }
}
