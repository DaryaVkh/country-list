import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { FilterSidebarComponent } from './filter-sidebar/filter-sidebar.component';
import {ListItemModule} from 'src/app/shared/list-item/list-item.module';
import {PageControlPanelComponent} from './page-control-panel/page-control-panel.component';
import {PrevArrowComponent} from './prev-arrow/prev-arrow.component';
import {NextArrowComponent} from './next-arrow/next-arrow.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FilterSidebarComponent,
    PageControlPanelComponent,
    PrevArrowComponent,
    NextArrowComponent,
    SelectorComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ListItemModule,
    ReactiveFormsModule,
  ]
})
export class MainPageModule {}
