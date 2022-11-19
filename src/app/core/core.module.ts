import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [AppRoutingModule],
  exports: [HeaderComponent, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  constructor() {}
}
