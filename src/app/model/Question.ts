import { IQuestion } from './IQuestion';

export class Question implements IQuestion {
    questionText: String = '';
    choices: String[] = [];

    constructor(questionObject: object) {
        console.log('In the constructor');
        Object.assign(this, questionObject);
    }

    getQuestion() {
        return {
            questionText: this.questionText,
            choices: this.choices
        };
    }
}
