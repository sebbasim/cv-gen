import App from './App.svelte';
import UserInterface from './UserInterface.svelte'; 

const app = new App({
	target: document.getElementById('app')
});

const ui = new UserInterface({
	target: document.getElementById('ui')
});

export {app, ui}