import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page.component';
import { CardPageRoutingModule } from './card-page-routing.module';
import {BackIconComponent} from './back-icon/back-icon.module';
import {ListItemModule} from '../../shared/list-item/list-item.module';

@NgModule({
  declarations: [
    CardPageComponent,
    BackIconComponent,
  ],
  imports: [
    CommonModule,
    CardPageRoutingModule,
    ListItemModule,
  ]
})
export class CardPageModule {}
