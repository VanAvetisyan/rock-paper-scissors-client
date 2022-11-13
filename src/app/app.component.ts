import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { chooseElements } from './choose-elements';

import { TranslateService } from '../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rock-paper-scissors-client';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'de']);
    this.translate.setDefaultLang('en');
  }

  userChoose: string = '';
  computerChoose: string = '';
  userPoints: number = 0;
  computerPoints: number = 0;

  resultLabel: string = '';
  userPickLabel: string = '';
  userPickImage: string = '../assets/rps/rock-user.png';
  computerPickLabel: string = '';
  computerPickImage: string = '../assets/rps/rock-enemy.png';

  numberOfGames = 0;
  userScoreValue: number = 0;

  runAnimationLeft: boolean = false;
  runAnimationRight: boolean = false;

  userWinner: boolean = false;
  computerWinner: boolean = false;

  reset() {
    this.userChoose = '';
    this.computerChoose = '';
    this.userPoints = 0;
    this.computerPoints = 0;
    this.numberOfGames = 0;
    this.userScoreValue = 0;
    this.userPickLabel = '';
    this.userPickImage = '../assets/rps/rock-user.png';
    this.computerPickLabel = '';
    this.computerPickImage = '../assets/rps/rock-enemy.png';
    this.userWinner = false;
    this.computerWinner = false;
  }

  calculateRandomComputerChoose(): string {
    let randomIndex = Math.floor(Math.random() * 3);
    return Object.values(chooseElements)[randomIndex].toString();
  }

  userPickedChoose(userPick: string) {
    this.userWinner = false;
    this.computerWinner = false;
    this.runAnimationLeft = true;
    this.runAnimationRight = true;
    this.userPickImage = '../assets/rps/rock-user.png';
    this.computerPickImage = '../assets/rps/rock-enemy.png';
    setTimeout(() => {
      this.userPickedChooseAfterAnimation(userPick);
    }, 2000);
  }

  userPickedChooseAfterAnimation(userPick: string) {
    this.runAnimationLeft = false;
    this.runAnimationRight = false;
    let randomPick = this.calculateRandomComputerChoose();

    const userPickIndex: number = Object.keys(chooseElements).indexOf(userPick);
    const randomPickIndex: number =
      Object.keys(chooseElements).indexOf(randomPick);

    this.userPickLabel = userPick;
    this.userPickImage = '../assets/rps/' + userPick + '-user.png';
    this.computerPickLabel = randomPick;
    this.computerPickImage = '../assets/rps/' + randomPick + '-enemy.png';

    let result = this.doesUserWin(userPick, randomPick);
    if (result === 1) {
      this.resultLabel = 'You Win :)';
      this.numberOfGames++;
      this.userPoints++;
      this.userWinner = true;
      this.computerWinner = false;
    } else if (result === 2) {
      this.resultLabel = 'You Lose :(';
      this.numberOfGames++;
      this.computerPoints++;
      this.userWinner = false;
      this.computerWinner = true;
    } else {
      this.resultLabel = 'Tie :|';
      this.userWinner = false;
      this.computerWinner = false;
    }

    this.userScoreValue = Math.round(
      (this.userPoints * 100) / this.numberOfGames
    );
  }

  doesUserWin(userPick: string, randomPick: string): number {
    if (userPick === randomPick) return 0;
    if (
      (userPick === 'rock' && randomPick === 'scissors') ||
      (userPick === 'paper' && randomPick === 'rock') ||
      (userPick === 'scissors' && randomPick === 'paper')
    )
      return 1;

    return 2;
  }
}
