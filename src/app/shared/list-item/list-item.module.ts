import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ListItemComponent} from './list-item.component';
import {ForwardIconComponent} from './forward-icon/forward-icon.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ListItemComponent,
    EntryComponent,
    ForwardIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListItemComponent,
    EntryComponent,
    ForwardIconComponent,
  ],
})
export class ListItemModule {}
