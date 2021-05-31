import {StartPage} from "./startPage/startPage";
import {SettingPage} from "./SettingsPage/settingPage";
import {AboutPage} from "./About Page/aboutPage";
import {GamePage} from "./GamePage/gamePage";
import {BestScore} from "./BestScore Page/bestScore";
import {Header} from "./header/header";

export class Routing {
    aboutPage: AboutPage;
    private  startPage: StartPage;
    private gamePage: GamePage;
    private  settingsPage:SettingPage;
    private bestScorePage:BestScore;
    container?:HTMLElement|null;
    constructor() {
        this.startPage = new StartPage();
        this.aboutPage = new AboutPage();
        this.gamePage = new GamePage();
        this.settingsPage = new SettingPage();
        this.bestScorePage = new BestScore();

    }

    _locationResolver = (location: string) => {
        console.log("location in resovlver" , location)
        let container=document.querySelector('.main-container')
        switch (location) {
            case '/':
                if(container)container.innerHTML=`
               <div class="start-page">
               ${this.startPage.element.innerHTML}
               </div>`
                break;
            case '/about':
               if(container)container.innerHTML=`
               <div class="about-field">
               ${this.aboutPage.element.innerHTML}
               </div>`
              break;
            case '/settings':
                if(container)container.innerHTML=`
               <div class="settings-field">
               ${this.settingsPage.element.innerHTML}
               </div>`
                break;
            case '/bestScore':
                if(container)container.innerHTML=`
               <div class="best-score">
               ${this.bestScorePage.element.innerHTML}
               </div>`
                break;
            case '/start':
                break;
        }
    }
}


