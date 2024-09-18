import { createAccount, signIn } from "../controller/firebaseAuth.js";

export async function signInView() {
    const response = await fetch('/view/templates/signIn.html',
        {cache: 'no-store'});
    const template = await response.text(); 

        const templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = template;

        

        const root = document.getElementById('root');
        root.innerHTML = '';
        root.appendChild(templateWrapper);

        const signUpForm = templateWrapper.querySelector('#sign-up-form');
        signUpForm.addEventListener('submit', createAccount);
        const signInForm =templateWrapper.querySelector('#sign-in-form');
        signInForm.addEventListener('submit', signIn);
}