import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyElementsModule } from '@angular-extensions/elements';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WcWrapperComponent } from './wc-wrapper/wc-wrapper.component';
import { WcWrapperBarComponent } from './wc-wrapper-bar/wc-wrapper-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    WcWrapperComponent,
    WcWrapperBarComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    RouterModule.forRoot([
      {
        path: 'recuperacao/foo',
        component: WcWrapperComponent,
      },

      {
        path: 'recuperacao/bar',
        component: WcWrapperBarComponent,
      },

    ])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
