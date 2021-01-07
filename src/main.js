import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		devName: 'Nicolas Pereira'
	}
});

export default app;