import {NgModule} from '@angular/core';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsModule} from '@ngxs/store';
import {environment} from 'src/environments/environment';
import {CountryState} from './country/country.state';
import {CurrenciesState} from './currencies/currencies.state';
import {MainPageState} from './main-page/main-page.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
        CountryState,
        CurrenciesState,
        MainPageState,
      ],
      {
        developmentMode: environment.production,
      }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
})
export class StoreModule {}
