import { GameComponent } from './game.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameComponent],
  imports: [SharedModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class GameModule {}
