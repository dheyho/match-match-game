import {BaseComponent} from "../baseComponent";
import './bestScore.scss';

export class BestScore extends BaseComponent{
    constructor() {
        super('div',['best-score']);
        this.element.innerHTML=`
         <h1 class="about-field__title">The best of the best</h1>
         <span class="about-field__separator"></span>
    <div>1. Surname Name : score</div>
    <div>2. Surname Name : score</div>
    <div>3. Surname Name : score</div>
    `
    }
}
