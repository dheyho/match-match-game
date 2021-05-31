
import {BaseComponent} from "../baseComponent";
import './settingPage.scss';

export class SettingPage extends BaseComponent{
    constructor() {
        super('div',['settings-field']);
        this.element.innerHTML=`
         <h1 class="about-field__title">Difficulty</h1>
        
    <div>EASY 4x4</div>
    <div>MEDIUM 8x8</div>
    <div>HARD 10x10</div>
    `
    }
}
