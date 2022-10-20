import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'person-management',
    loadChildren: () => import('./pages/person-management/person-management.module').then( m => m.PersonManagementPageModule)
  },
  {
    path: 'person-detail',
    loadChildren: () => import('./pages/person-management/person-detail/person-info.module').then( m => m.PersonInfoPageModule)
  },
  {
    path: 'task-management',
    loadChildren: () => import('./pages/task-management/task-management.module').then( m => m.TaskManagementPageModule)
  },
  {
    path: 'task-detail',
    loadChildren: () => import('./pages/task-management/task-detail/task-info.module').then( m => m.TaskInfoPageModule)
  },
  {
    path: 'assigned-tasks',
    loadChildren: () => import('./pages/assigned-tasks/assigned-tasks.module').then( m => m.AssignedTasksPageModule)
  },
  {
    path: 'assignment-management',
    loadChildren: () => import('./pages/assignment-management/assignment-management.module').then( m => m.AssignmentManagementPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
