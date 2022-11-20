import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToolbarModule } from 'primeng/toolbar';
import { RpsButtonPickGroupComponent } from './rps-button-pick-group/rps-button-pick-group.component';
import { RpsScoreComponent } from './rps-score/rps-score.component';
import { RpsHandViewComponent } from './rps-hand-view/rps-hand-view.component';
import { RpsMenuComponent } from './rps-menu/rps-menu.component';

@NgModule({
  declarations: [
    RpsButtonPickGroupComponent,
    RpsScoreComponent,
    RpsHandViewComponent,
    RpsMenuComponent,
  ],
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
    RpsButtonPickGroupComponent,
    RpsScoreComponent,
    RpsHandViewComponent,
    RpsMenuComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
