import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PickElements } from '../choose-elements';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'de']);
    this.translate.setDefaultLang('en');
  }

  userChoose: string = '';
  enemyChoose: string = '';
  userPoints: number = 0;
  enemyPoints: number = 0;

  resultLabel: string = '';
  userPickLabel: string = '';
  userPickImage: string = '../assets/rps/rock-user.png';
  enemyPickLabel: string = '';
  enemyPickImage: string = '../assets/rps/rock-enemy.png';

  numberOfGames = 0;
  userScoreValue: number = 0;

  runAnimationLeft: boolean = false;
  runAnimationRight: boolean = false;

  userWinner: boolean = false;
  enemyWinner: boolean = false;

  soundOff: boolean = true;

  pickButtonsDisabled = false;

  reset() {
    this.userChoose = '';
    this.enemyChoose = '';
    this.userPoints = 0;
    this.enemyPoints = 0;
    this.numberOfGames = 0;
    this.userScoreValue = 0;
    this.userPickLabel = '';
    this.userPickImage = '../assets/rps/rock-user.png';
    this.enemyPickLabel = '';
    this.enemyPickImage = '../assets/rps/rock-enemy.png';
    this.userWinner = false;
    this.enemyWinner = false;
  }

  calculateRandomComputerChoose(): string {
    let randomIndex = Math.floor(Math.random() * 3);
    return Object.values(PickElements)[randomIndex].toString();
  }

  userPickedChoose(userPick: string) {
    this.userWinner = false;
    this.enemyWinner = false;
    this.runAnimationLeft = true;
    this.runAnimationRight = true;
    this.userPickImage = '../assets/rps/rock-user.png';
    this.enemyPickImage = '../assets/rps/rock-enemy.png';
    if (!this.soundOff) {
      this.playAudioEffect();
    }

    this.pickButtonsDisabled = true;
    setTimeout(() => {
      this.userPickedChooseAfterAnimation(userPick);
    }, 2000);
  }

  userPickedChooseAfterAnimation(userPick: string) {
    this.runAnimationLeft = false;
    this.runAnimationRight = false;
    let randomPick = this.calculateRandomComputerChoose();

    const userPickIndex: number = Object.keys(PickElements).indexOf(userPick);
    const randomPickIndex: number = Object.keys(PickElements).indexOf(randomPick);

    this.userPickLabel = userPick;
    this.userPickImage = '../assets/rps/' + userPick + '-user.png';
    this.enemyPickLabel = randomPick;
    this.enemyPickImage = '../assets/rps/' + randomPick + '-enemy.png';

    let result = this.doesUserWin(userPick, randomPick);
    if (result === 1) {
      this.resultLabel = 'You Win :)';
      this.numberOfGames++;
      this.userPoints++;
      this.userWinner = true;
      this.enemyWinner = false;
    } else if (result === 2) {
      this.resultLabel = 'You Lose :(';
      this.numberOfGames++;
      this.enemyPoints++;
      this.userWinner = false;
      this.enemyWinner = true;
    } else {
      this.resultLabel = 'Tie :|';
      this.userWinner = false;
      this.enemyWinner = false;
    }

    this.userScoreValue = Math.round((this.userPoints * 100) / this.numberOfGames);

    this.pickButtonsDisabled = false;
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

  playAudioEffect(): void {
    let audio = new Audio();
    audio.src = '../assets/sound-effects/rps-effect.mp3';
    audio.load();
    audio.play();
  }

  soundSwitch(): void {
    this.soundOff = !this.soundOff;
  }
}
