// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from './Components/layout/layout.component';
// import { OrganizationListComponent } from './Pages/organization-list/organization-list.component';
// import { LoginSetPassComponent } from './Pages/login/loginSetPassword/loginSetPass.component';
// import { LoginSuccessComponent } from './Pages/login/login-success/login-success.component';
// import { LoginForgotPassComponent } from './Pages/login/login-forgot-pass/login-forgot-pass.component';
// import { LoginCheckMailComponent } from './Pages/login/login-check-mail/login-check-mail.component';
// import { LoginSigninComponent } from './Pages/login/login-signin/login-signin.component';
// import { PlanListComponent } from './Pages/plan-list/plan-list.component';
// import { FivewFormComponent } from './Pages/fivew-form/fivew-form.component';
// import { ProfileComponent } from './Pages/profile/profile.component';
// import { UserListComponent } from './Pages/user-list/user-list.component';
// import { LoginLayoutComponent } from './Components/Login/login-layout/login-layout.component';
// import { TestLoginComponent } from './Pages/login/test-login/test-login.component';
// import { TestLayoutComponent } from './Pages/test-layout/test-layout.component';

// // import { FiveWFormComponent } from './fivew-form/fivew-form.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   {
//       path: 'login',
//       component: LoginLayoutComponent,
//       children: [

//         { path: '', component: LoginSetPassComponent },
//         { path: 'success', component: LoginSuccessComponent },
//         { path: 'forgot-pass', component: LoginForgotPassComponent },
//         { path: 'check-mail', component: LoginCheckMailComponent },
//         { path: 'sign-in', component: LoginSigninComponent },
//          { path: 'test-login',component: TestLoginComponent }
//       ]
//   },
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       { path: 'organization', component: OrganizationListComponent, data: { title: 'Organization List' } },
//       { path: 'plan-list', component: PlanListComponent, data: { title: 'Plan List' } },
//       { path: 'fivew-form', component: FivewFormComponent },
//       { path: 'profile', component: ProfileComponent },
//       { path: 'user-list', component: UserListComponent, data: { title: 'User List' } },
//       {path:'test-layout',component:TestLayoutComponent}
//     ]
//   },
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginLayoutComponent } from './Components/Login/login-layout/login-layout.component';
// import { OrganizationLayoutComponent } from './Pages/organization/organization-layout/organization-layout.component';
// import { PlanLayoutComponent } from './Pages/plan-list/plan-layout/plan-layout.component';
// import { ProfileLayoutComponent } from './Pages/profile/profile-layout/profile-layout.component';
// import { UserLayoutComponent } from './Pages/user-list/user-layout/user-layout.component';

import { OrganizationListComponent } from './Pages/organization-list/organization-dashboard/organization-list.component';
import { LoginSetPassComponent } from './Pages/login/loginSetPassword/loginSetPass.component';
import { LoginSuccessComponent } from './Pages/login/login-success/login-success.component';
import { LoginForgotPassComponent } from './Pages/login/login-forgot-pass/login-forgot-pass.component';
import { LoginCheckMailComponent } from './Pages/login/login-check-mail/login-check-mail.component';
import { LoginSigninComponent } from './Pages/login/login-signin/login-signin.component';
import { PlanListComponent } from './Pages/plan-list/plan-list-dashboard/plan-list.component';
import { FivewFormComponent } from './Pages/fivew-form/fivew-dasboard/fivew-form.component';
import { ProfileComponent } from './Pages/profile/profile-dashboard/profile.component';
import { UserListComponent } from './Pages/user-list/user-dashboard/user-list.component';
import { TestLoginComponent } from './Pages/login/test-login/test-login.component';
import { TestLayoutComponent } from './Pages/test-layout/test-layout.component';
import { CreateUserComponent } from './Pages/user-list/create-user/create-user.component';
import { PlanDetailsComponent } from './Pages/plan-list/plan-details/plan-details.component';
import { UserDetailsComponent } from './Pages/user-list/user-details/user-details.component';
import { ResetPassComponent } from './Pages/user-list/reset-pass/reset-pass.component';
import { DownAppComponent } from './Pages/login/down-app/down-app.component';
import { CreateFormComponent } from './Pages/fivew-form/create-form/create-form.component';
import { CreateOrgComponent } from './Pages/organization-list/create-org/create-org.component';
import { OrgDetailsComponent } from './Pages/organization-list/org-details/org-details.component';
import { EditOrgComponent } from './Pages/organization-list/edit-org/edit-org.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginSigninComponent, data: { title: 'Sign In' } },
      {
        path: 'success',
        component: LoginSuccessComponent,
        data: { title: 'Login Success' },
      },
      {
        path: 'forgot-pass',
        component: LoginForgotPassComponent,
        data: { title: 'Forgot Password' },
      },
      {
        path: 'check-mail',
        component: LoginCheckMailComponent,
        data: { title: 'Check Mail' },
      },
      {
        path: 'set-pass',
        component: LoginSetPassComponent,
        data: { title: 'Set Password' },
      },
      {
        path: 'down-app',
        component: DownAppComponent,
        data: { title: 'Download App' },
      },
      {
        path: 'test-login',
        component: TestLoginComponent,
        data: { title: 'Test Login' },
      },
    ],
  },
  {
    path: 'organization',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: OrganizationListComponent,
        data: { title: 'Organization List' },
      },
      {
        path: 'create-org',
        component: CreateOrgComponent,
        data: { title: 'Create Organization' },
      },
      {
        path: 'org-details',
        component: OrgDetailsComponent,
        data: { title: 'Organization Details' },
      },
      {
        path: 'edit-org',
        component: EditOrgComponent,
        data: { title: 'Edit Organization' },
      },
    ],
  },
  {
    path: 'plan-list',
    component: LayoutComponent,
    children: [
      { path: '', component: PlanListComponent, data: { title: 'Plan List' } },
      {
        path: 'details',
        component: PlanDetailsComponent,
        data: { title: 'Plan Details' },
      },
    ],
  },
  {
    path: 'profile',
    component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent, data: { title: 'Profile' } },
    ],
  },
  {
    path: 'user-list',
    component: LayoutComponent,
    children: [
      { path: '', component: UserListComponent, data: { title: 'User List' } },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: { title: 'Create User' },
      },
      {
        path: 'details',
        component: UserDetailsComponent,
        data: { title: 'User Details' },
      },
      {
        path: 'reset-pass',
        component: ResetPassComponent,
        data: { title: 'Reset Password' },
      },
    ],
  },
  {
    path: 'fivew-form',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FivewFormComponent,
        data: { title: 'Five W Form' },
      },
      {
        path: 'create-form',
        component: CreateFormComponent,
        data: { title: 'Create Form' },
      },
      {
        path: 'test-layout',
        component: TestLayoutComponent,
        data: { title: 'Test Layout' },
      },
    ],
  },
];
