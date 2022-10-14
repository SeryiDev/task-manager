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
    path: 'person-info',
    loadChildren: () => import('./pages/person-detail/person-info.module').then( m => m.PersonInfoPageModule)
  },
  {
    path: 'task-management',
    loadChildren: () => import('./pages/task-management/task-management.module').then( m => m.TaskManagementPageModule)
  },
  {
    path: 'task-info',
    loadChildren: () => import('./pages/task-detail/task-info.module').then( m => m.TaskInfoPageModule)
  },
  {
    path: 'task-assignment',
    loadChildren: () => import('./pages/task-assignment/task-assignment.module').then( m => m.TaskAssignmentPageModule)
  },
  {
    path: 'assigned-tasks',
    loadChildren: () => import('./pages/assigned-tasks/assigned-tasks.module').then( m => m.AssignedTasksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
