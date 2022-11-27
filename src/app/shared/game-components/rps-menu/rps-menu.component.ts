import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rps-menu',
  templateUrl: './rps-menu.component.html',
  styleUrls: ['./rps-menu.component.scss'],
})
export class RpsMenuComponent {

  @Output()
  soundSwitchEvent = new EventEmitter<string>();

  @Output()
  resetEvent = new EventEmitter<string>();

  @Input()
  soundOff: boolean = true;

  reset(): void {
    this.resetEvent.emit();
  }

  soundSwitch(): void {
    this.soundSwitchEvent.emit();
  }
}
