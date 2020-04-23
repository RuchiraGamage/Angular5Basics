import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './data-bind/cockpit/cockpit.component';
import { ServerElementComponent } from './data-bind/server-element/server-element.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BatterHighlightDirective } from './batter-highlight/batter-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { NewAccountComponent } from './servisesTest/new-account/new-account.component';
import { AccountComponent } from './servisesTest/account/account.component';
import {AccountService} from './account.service';
import {LoggingService} from './logging.service';
import {RecipeService} from './recipes/recipe.service';
import {ShoppinglistService} from './shopping-list/shoppinglist.service';
import { HomeComponent } from './routing_tutorial/home/home.component';
import { EditServerComponent } from './routing_tutorial/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing_tutorial/servers/server/server.component';
import { ServersComponent } from './routing_tutorial/servers/servers.component';
import { UserComponent } from './routing_tutorial/users/user/user.component';
import { UsersComponent } from './routing_tutorial/users/users.component';
import { ServersService } from './routing_tutorial/servers/servers.service';
import { PageNotFoundComponent } from './routing_tutorial/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BatterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      AppRoutingModule
    ],
  providers: [
    AccountService,
    LoggingService,
    RecipeService,
    ShoppinglistService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
