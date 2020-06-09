import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'result-slip',
    loadChildren: () => import('./result-slip/result-slip.module').then( m => m.ResultSlipPageModule)
  },
  {
    path: 'resultpage/:id',
    loadChildren: () => import('./result-page/result-page.module').then( m => m.ResultPagePageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'update-result',
    loadChildren: () => import('./update-result/update-result.module').then( m => m.UpdateResultPageModule)
  },
  {
    path: 'lecturer',
    loadChildren: () => import('./lecturer/lecturer.module').then( m => m.LecturerPageModule)
  },
  {
    path: 'academic-staff',
    loadChildren: () => import('./academic-staff/academic-staff.module').then( m => m.AcademicStaffPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
