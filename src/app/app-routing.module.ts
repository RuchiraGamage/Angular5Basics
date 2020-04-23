import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './routing_tutorial/home/home.component';
import {UsersComponent} from './routing_tutorial/users/users.component';
import {UserComponent} from './routing_tutorial/users/user/user.component';
import {ServersComponent} from './routing_tutorial/servers/servers.component';
import {ServerComponent} from './routing_tutorial/servers/server/server.component';
import {EditServerComponent} from './routing_tutorial/servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './routing_tutorial/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
