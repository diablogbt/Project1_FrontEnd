import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectSelctorComponent } from './project-selctor/project-selctor.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ResourceWholeTableComponent } from './resource-whole-table-YG/resource-whole-table.component';


const routes: Routes = [
  {path: 'resourcetable', component: ResourceTableComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path: 'projectlist', component: ProjectSelctorComponent},
  {path: 'resourcepage', component: ResourcePageComponent},
  {path: 'projectpage', component: ProjectPageComponent},
  {path: 'resourcewholetable', component: ResourceWholeTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
