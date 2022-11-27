import { UserpickResponse } from './model/userpick-response';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GameRestService } from './rest/game-rest.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private restService: GameRestService) {}

  ngOnInit(): void {
    this.soundOff = localStorage.getItem('soundValue') === 'off' ? true : false;
  }

  userPoints: number = 0;
  enemyPoints: number = 0;
  numberOfGames = 0;
  scoreValue: number = 0;

  userPickImage: string = '../assets/rps/rock-user.png';
  enemyPickImage: string = '../assets/rps/rock-enemy.png';
  runAnimationLeft: boolean = false;
  runAnimationRight: boolean = false;

  userWinner: boolean = false;
  enemyWinner: boolean = false;

  soundOff: boolean = true;
  pickButtonsDisabled = false;

  reset() {
    this.userPoints = 0;
    this.enemyPoints = 0;
    this.numberOfGames = 0;
    this.scoreValue = 0;
    this.resetPickImages();
    this.resetWinner();
  }

  resetPickImages() {
    this.userPickImage = '../assets/rps/rock-user.png';
    this.enemyPickImage = '../assets/rps/rock-enemy.png';
  }
  resetAnimations() {
    this.runAnimationLeft = false;
    this.runAnimationRight = false;
  }
  resetWinner() {
    this.userWinner = false;
    this.enemyWinner = false;
  }

  userPickedObjectWinnerCalculator(userPick: string): void {
    this.restService.userPicked(userPick).subscribe({
      next: (response) => {
        this.userPickedChooseAfterAnimation(response);
      },
      error: (e) => console.error(e),
      complete: () => {} /*console.info('complete')*/,
    });
  }

  userPickedChoose(userPick: string) {
    this.resetWinner();
    this.runAnimationLeft = true;
    this.runAnimationRight = true;
    this.resetPickImages();
    if (!this.soundOff) {
      this.playAudioEffect();
    }

    this.pickButtonsDisabled = true;
    setTimeout(() => {
      this.userPickedObjectWinnerCalculator(userPick);
    }, 2000);
  }

  userPickedChooseAfterAnimation(userPickResponse: UserpickResponse) {
    this.resetAnimations();

    this.userPickImage = '../assets/rps/' + userPickResponse.userPick + '-user.png';
    this.enemyPickImage = '../assets/rps/' + userPickResponse.enemyPick + '-enemy.png';

    this.resetWinner();
    if (userPickResponse.userWins) {
      this.numberOfGames++;
      this.userPoints++;
      this.userWinner = true;
    } else if (userPickResponse.enemyWins) {
      this.numberOfGames++;
      this.enemyPoints++;
      this.enemyWinner = true;
    }

    this.scoreValue = Math.round((this.userPoints * 100) / this.numberOfGames);
    this.pickButtonsDisabled = false;
  }

  playAudioEffect(): void {
    let audio = new Audio();
    audio.src = '../assets/sound-effects/rps-effect.mp3';
    audio.load();
    audio.play();
  }

  soundSwitch(): void {
    this.soundOff = !this.soundOff;
    localStorage.setItem('soundValue', this.soundOff ? 'off' : 'on');
  }
}
