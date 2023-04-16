import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DemoAccordingBasicComponent } from './demo-according-basic/demo-according-basic.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ButtonExampleComponent } from './button-example/button-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAccordingBasicComponent,
    SidebarComponent,
    ButtonExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
