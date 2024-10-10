import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrganizationListComponent } from './Pages/organization-list/organization-list.component';
import { LoginComponent } from './Pages/login/login.component';

// import { FiveWFormComponent } from './fivew-form/fivew-form.component';

export const routes: Routes = [
  {
    path: 'organization',
    component: LayoutComponent,
    children: [
      { path: 'organization', component: OrganizationListComponent, data: { title: 'Organization List' } },
    //   { path: '5w-form', component: FiveWFormComponent, data: { title: '5W Form Data' } },
      // other child routes here
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
];

