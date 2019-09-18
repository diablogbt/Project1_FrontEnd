import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayResourceByProjectComponent } from './display-resource-by-project/display-resource-by-project.component';
import { GetResourceRequestComponent } from './get-resource-request/get-resource-request.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceWholeTableComponent } from './resource-whole-table/resource-whole-table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectSelctorComponent } from './project-selctor/project-selctor.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ResourcePageComponent } from './resource-page/resource-page.component';

import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TieredMenuModule} from 'primeng/tieredmenu';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,

    SplitButtonModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    TableModule,
    TieredMenuModule
  ],
  declarations: [
    AppComponent,
    DisplayResourceByProjectComponent,
    GetResourceRequestComponent,
    ResourceTableComponent,
    ResourceWholeTableComponent,
    UserProfileComponent,
    ProjectSelctorComponent,
    ResourcePageComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
