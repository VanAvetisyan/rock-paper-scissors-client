import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rps-score',
  templateUrl: './rps-score.component.html',
  styleUrls: ['./rps-score.component.scss'],
})
export class RpsScoreComponent {

  @Input()
  isUser: boolean = false;

  @Input()
  scoreValue: number = 0;
}
