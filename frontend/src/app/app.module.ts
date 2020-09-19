import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationDirective } from './directives/animation.directive';
import { HomeComponent } from './components/home/home.component';
import { CloudsDirective } from './directives/animation/clouds/clouds.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimationDirective,
    CloudsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
