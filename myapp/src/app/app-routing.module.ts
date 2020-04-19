import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyTreeCompComponent} from './my-tree-comp/my-tree-comp.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tree', component: MyTreeCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
