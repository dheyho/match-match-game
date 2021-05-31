import Control from "../../control";
import { BaseComponent } from "../baseComponent";
import { Button } from "../button/button";
import { makeLogger } from "ts-loader/dist/logger";
import { User } from "../User";


export class RegisterForm extends BaseComponent {
    submitButton: Button;
    nameInput: HTMLInputElement | null;
    lastNameInput: HTMLInputElement | null;
    emailInput: HTMLInputElement | null;
    // user: User;
    isSubmit: Boolean;

    constructor() {
        super('form', ['register-form']);
        this.submitButton = new Button(this.element, { default: "btn", active: 'btn active' }, 'Submit', true);
        this.nameInput = this.element.querySelector('#name');
        this.lastNameInput = this.element.querySelector('#lastName');
        this.emailInput = this.element.querySelector('#email');
        this.isSubmit = false;

        this.submitButton.onClick = () => {
            this.validationOnLetters();
            if (this.validationOnLetters()) {
                this.getObject();
            }
            this.isSubmit = true;

        }
    }

    getNameValue() {
        this.nameInput = this.element.querySelector('#name');
        if (this.nameInput?.value === "") {
            this.setError("")
        }
        return this.nameInput?.value;
    }
    getLastNameValue() {
        this.lastNameInput = this.element.querySelector('#last-name');
        return this.lastNameInput?.value;

    }
    getEmailValue() {
        this.emailInput = this.element.querySelector('#email');
        return this.emailInput?.value;
    }

    setError(err: string | null) {
        if (err === null) {
            this.element.classList.remove('error');
        } else {
            this.element.classList.add('error')
        }
    }

    //получаем юзера
    getObject() {
        let user = {
            name: this.getNameValue(),
            lastName: this.getLastNameValue(),
            email: this.getEmailValue()
        };
        return user;
    }


    render() {
        this.element.innerHTML = `
         <label class="label-auth">
                   <span>Name</span>
                    <input id="name" type="text" required>
           </label>
            <label class="label-auth">
                    <span>Last Name</span>
                    <input id="last-name" type="text" required>
             </label>
             <label class="label-auth">
                    <span>E-mail</span> 
                   <input id="email" type="email" required>                                         
               </label>    
            <div class="modal-footer">
                <div class="footer-buttons">
<!--                    <button class=" button-login" type="submit">Add User</button>                   -->
                </div>
            </div>`;

        this.element.append(this.submitButton.node);

        return this.element;
    }


    //Validation
    validationOnLetters() {
        const letters = /^[A-Za-zА-я]+$/;
        if (this.nameInput?.value.match(letters)) {
            return true;
        }
        else {
            this.nameInput?.focus();
            return false;
        }
    }
}
