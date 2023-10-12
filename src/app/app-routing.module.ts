import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise96Component } from './exercise96/exercise96.component';
import { Exercise9798Component } from './exercise9798/exercise9798.component';
import { Exercise99Component } from './exercise99/exercise99.component';

const routes: Routes = [
  {
    path: 'exercise-96',
    component: Exercise96Component,
  },
  {
    path: 'exercise-97-and-98',
    component: Exercise9798Component,
  },
  {
    path: 'exercise-99',
    component: Exercise99Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
