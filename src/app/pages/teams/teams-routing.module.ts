import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { ListComponent } from './list/list.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'edit/:id',
    component: EditTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
