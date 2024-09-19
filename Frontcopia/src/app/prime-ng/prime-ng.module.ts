import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import { Sidebar, SidebarModule } from 'primeng/sidebar';









@NgModule({
  declarations: [],
  
  exports: [
    CardModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    ToastModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ListboxModule,
    MultiSelectModule,
    SidebarModule  
  ]
})
export class PrimeNgModule { }
