import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveStageComponent } from './active-stage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActiveStageComponent,
      },
    ]),
  ],
  declarations: [ActiveStageComponent],
})
export class ActiveStageModule {}
