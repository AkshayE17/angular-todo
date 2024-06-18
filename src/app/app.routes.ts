import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportentTaskComponent } from './components/pages/importent-task/importent-task.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';

export const routes: Routes = [
  {
    path:"",
    component:AllTaskComponent
  },
  {
    path:"importants",
    component:ImportentTaskComponent
 },
 {
  path:"completed",
  component:CompletedTaskComponent
 }
];
