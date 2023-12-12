import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { ListComponent } from './list/list.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

@NgModule({
  imports: [CommonModule, TeamsRoutingModule],
  declarations: [TeamsComponent, ListComponent, EditTeamComponent],
})
export class TeamsModule {}
