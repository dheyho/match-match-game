import './startPage.scss'

import {BaseComponent} from "../baseComponent";


export class StartPage extends BaseComponent{
    constructor() {
        super('div',['start-page']);
        this.element.innerHTML=`
            <div class="start-page__container">
                <h1>Match-Match-Game</h1>
            </div>  `;
    }

}
