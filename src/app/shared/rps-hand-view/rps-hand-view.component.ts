import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rps-hand-view',
  templateUrl: './rps-hand-view.component.html',
  styleUrls: ['./rps-hand-view.component.scss'],
})
export class RpsHandViewComponent {
  constructor() {}

  @Input()
  isUser: boolean = false;

  @Input()
  isWinner: boolean = false;

  @Input()
  runUserAnimation: boolean = false;

  @Input()
  runEnemyAnimation: boolean = false;

  @Input()
  pickedImage: string = '';
}
