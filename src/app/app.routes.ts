import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrganizationListComponent } from './Pages/organization-list/organization-list.component';
import { LoginSetPassComponent } from './Pages/login/loginSetPassword/loginSetPass.component';
import { LoginSuccessComponent } from './Pages/login/login-success/login-success.component';
import { LoginForgotPassComponent } from './Pages/login/login-forgot-pass/login-forgot-pass.component';
import { LoginCheckMailComponent } from './Pages/login/login-check-mail/login-check-mail.component';
import { LoginSigninComponent } from './Pages/login/login-signin/login-signin.component';
import { PlanListComponent } from './Pages/plan-list/plan-list.component';
import { FivewFormComponent } from './Pages/fivew-form/fivew-form.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { UserListComponent } from './Pages/user-list/user-list.component';

// import { FiveWFormComponent } from './fivew-form/fivew-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { 
        path: 'login', 
        component: LoginSetPassComponent,
        children: [
          { path: '', component: LoginSetPassComponent },
           {path:'success',component:LoginSuccessComponent},
           {path:'forgot-pass',component:LoginForgotPassComponent},
           {path:'check-mail',component:LoginCheckMailComponent},
           {path:'sign-in',component:LoginSigninComponent}
         
        ]
      },
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'organization', component: OrganizationListComponent },
       
      ]
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'plan-list', component: PlanListComponent },
         
        ]
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'fivew-form', component: FivewFormComponent },
         
        ]
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'profile', component: ProfileComponent },
         
        ]
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'user-list', component: UserListComponent },
         
        ]
      },
  ];

