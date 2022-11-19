import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PickElements } from 'src/app/choose-elements';

@Component({
  selector: 'app-rps-button-pick-group',
  templateUrl: './rps-button-pick-group.component.html',
  styleUrls: ['./rps-button-pick-group.component.scss'],
})
export class RpsButtonPickGroupComponent {
  pickElementsList = PickElements;

  constructor() {}

  @Output()
  pickEvent = new EventEmitter<string>();

  @Input()
  isDisabled: boolean = false;

  buttonPicked(pickedElement: string) {
    this.pickEvent.emit(pickedElement);
  }

  originalOrder = (
    a: KeyValue<string, PickElements>,
    b: KeyValue<string, PickElements>
  ): number => {
    return 0;
  };
}
