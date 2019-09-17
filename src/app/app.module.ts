import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayResourceByProjectComponent } from './display-resource-by-project/display-resource-by-project.component';
import { GetResourceRequestComponent } from './get-resource-request/get-resource-request.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceWholeTableComponent } from './resource-whole-table/resource-whole-table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayResourceByProjectComponent,
    GetResourceRequestComponent,
    ResourceTableComponent,
    ResourceWholeTableComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
