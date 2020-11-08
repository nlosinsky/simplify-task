import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './pages/tabs/tabs.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'tabs'
}, {
  path: 'tabs',
  component: TabsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
