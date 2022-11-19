import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserModule,
    ButtonModule,
    ImageModule,
    ToolbarModule,
    ProgressBarModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    BrowserModule,
    ButtonModule,
    ImageModule,
    ToolbarModule,
    ProgressBarModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
