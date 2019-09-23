import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayResourceByProjectComponent } from './display-resource-by-project/display-resource-by-project.component';
import { GetResourceRequestComponent } from './get-resource-request/get-resource-request.component';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceWholeTableComponent } from './resource-whole-table/resource-whole-table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectSelctorComponent } from './project-selctor/project-selctor.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { YGResourceWholeTableComponent } from './resource-whole-table-YG/resource-whole-table.component';
import { TestPostComponent } from './test-post/test-post.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ProjectPageComponent } from './project-page/project-page.component';




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
    CommonModule,
    ReactiveFormsModule,

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
    ResourcePageComponent,
    ProjectPageComponent,

    YGResourceWholeTableComponent,

    TestPostComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
