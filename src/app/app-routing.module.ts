import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'country/:code',
    loadChildren: () => import('./pages/card/card-page.module').then((m) => m.CardPageModule),
  },
  {
    path: '**',
    redirectTo: '/main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
