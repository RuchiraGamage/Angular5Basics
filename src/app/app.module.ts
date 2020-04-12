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
    AccountComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
