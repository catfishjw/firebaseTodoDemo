import { currentUser, signOut } from "../controller/firebaseAuth.js";

export async function homepageView() {
    const resp = await fetch('/view/templates/homepage.html', { cache: 'no-store'});
    const template = await resp.text();
    const root = document.getElementById('root');
    const container = document.createElement('div');
    container.innerHTML = template;
    root.innerHTML = '';
    root.appendChild(container);

    const signOutButton = container.querySelector('#signout-btn');
    signOutButton.addEventListener('click', signOut);
}