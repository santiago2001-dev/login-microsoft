import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateComponent} from 'src/app/components/private/private.component';
import {LoginComponent} from '../app/components/login/login.component'
import {MicrosftGuard} from './guards/microsft.guard'

const routes: Routes = [

  {path : 'private',component: PrivateComponent,canActivate:[MicrosftGuard]},
  {path : '**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
