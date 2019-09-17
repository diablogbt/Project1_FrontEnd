import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceTableComponent } from './resource-table/resource-table.component';


const routes: Routes = [
  {path: 'resourcetable', component: ResourceTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
