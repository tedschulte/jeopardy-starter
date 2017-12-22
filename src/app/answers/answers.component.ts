import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  savedAnswer;

  totalPoints = 0;

  @Input() questionInfo;

  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isCorrect() {
    if (this.savedAnswer === this.questionInfo.answer) {
      //alert("you are correct");
      this.totalPoints = this.totalPoints + this.questionInfo.value;
      this.savedAnswer = "";
      this.buttonClicked.emit();

    } else {
      alert(`Incorrect. The correct answer was ${this.questionInfo.answer}`);
      this.totalPoints = this.totalPoints - this.questionInfo.value;
      this.savedAnswer = "";
      this.buttonClicked.emit();
    }
  }

}
