import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { UserListComponent } from './user-list/user-list.component';
import { HighlightDirective } from './highlight.directive';
import { ChangeColorDirective } from './change-color.directive';
import { NeedDataService } from './need-data.service';
//import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    UserListComponent,
    HighlightDirective,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    //NgForm
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
