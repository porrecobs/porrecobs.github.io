import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		devName: 'Nicolas Pereira',
		devProfileInfoPT: {
      name: 'Nícolas Pereira',
      location: 'São Paulo, SP - Brasil',
      currentJob: 'Iteris Consultoria e Software (remoto)',
      motto: 'i am not throwing away my shot',
      aboutMeText: "Bacharel em Sistemas de Informação. Possuo conhecimentos em HTML e CSS. Conhecimentos intermediários em Javascript. Atualmente trabalho com diversas frameworks de Javascript tanto para Front-end quanto para Back-end, com foco em Angular e Ionic para aplicações híbridas. Procuro sempre estar em constante evolução e em processo de aprendizado. Dedico grande parte do meu tempo livre para podcasts e artigos na minha área de atuação."
    },
    devProfileInfoEN: {
      name: 'Nicolas Pereira',
      location: 'Sao Paulo, SP - Brasil',
      currentJob: 'Iteris Consultoria e Software (remoto)',
      aboutMeText: "Bachelor in Information Systems. I have knowledge in HTML and CSS. Intermediary knowledge in Javascript. Currently working with some Javascript frameworks for both Back End and Front End, focusing Angular and Ionic to hibrid applications. I'm always trying to be in constant evolution and learning process. I dedicate much of my free time to podcasts and articles in my area. "
    }
	}
});

export default app;