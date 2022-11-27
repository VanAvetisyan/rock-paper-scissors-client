import { SignInComponent } from './authentication/signin/signin.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToolbarModule } from 'primeng/toolbar';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { RpsButtonPickGroupComponent } from './game-components/rps-button-pick-group/rps-button-pick-group.component';
import { RpsScoreComponent } from './game-components/rps-score/rps-score.component';
import { RpsHandViewComponent } from './game-components/rps-hand-view/rps-hand-view.component';
import { RpsMenuComponent } from './game-components/rps-menu/rps-menu.component';

@NgModule({
  declarations: [
    RpsButtonPickGroupComponent,
    RpsScoreComponent,
    RpsHandViewComponent,
    RpsMenuComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    BrowserModule,
    ButtonModule,
    ImageModule,
    ToolbarModule,
    ProgressBarModule,
    ChipModule,
    CardModule,
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
    ChipModule,
    CardModule,
    HttpClientModule,
    RpsButtonPickGroupComponent,
    RpsScoreComponent,
    RpsHandViewComponent,
    RpsMenuComponent,
    SignInComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
