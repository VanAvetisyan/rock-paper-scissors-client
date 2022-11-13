import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { chooseElements } from './choose-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rock-paper-scissors-client';
  userChoose: string = '';
  computerChoose: string = '';
  userPoints: number = 0;
  computerPoints: number = 0;

  resultLabel: string = '';
  userPickLabel: string = '';
  computerPickLabel: string = '';

  reset() {
    this.userChoose = '';
    this.computerChoose = '';
    this.userPoints = 0;
    this.computerPoints = 0;
  }

  calculateRandomComputerChoose(): string {
    let randomIndex = Math.floor(Math.random() * 3);
    return Object.values(chooseElements)[randomIndex].toString();
  }

  userPickedChoose(userPick: string) {
    let randomPick = this.calculateRandomComputerChoose();

    const userPickIndex: number = Object.keys(chooseElements).indexOf(userPick);
    const randomPickIndex: number =
      Object.keys(chooseElements).indexOf(randomPick);

    this.userPickLabel = userPick;
    this.computerPickLabel = randomPick;

    let result = this.doesUserWin(userPickIndex, randomPickIndex);
    if (result === 1) {
      this.resultLabel = 'You Win :)';
    } else if (result === 2) {
      this.resultLabel = 'You Lose :(';
    } else {
      this.resultLabel = 'Tie :|';
    }
  }

  doesUserWin(userPickIndex: number, randomPickIndex: number): number {
    if (userPickIndex === randomPickIndex) return 0;
    if (
      (userPickIndex === 0 && randomPickIndex === 2) ||
      userPickIndex > randomPickIndex
    )
      return 1;
    return 2;
  }
}
