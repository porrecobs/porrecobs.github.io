<script>
  export let devName;
  export let devProfileInfoPT;
  export let devProfileInfoEN;
  let lang = 'PT';
  
  import AboutMe from './AboutMe.svelte';
</script>

<main style="background-color: #fff">
  <!--h1>Hello {devName}!</h1-->
  {#if lang == 'PT'}
    <AboutMe {devName} devProfileInfo={devProfileInfoPT} ></AboutMe>
  {:else}
    <AboutMe {devName} devProfileInfo={devProfileInfoEN}></AboutMe>
  {/if}
  <div class="content"></div>
</main>

<style>
	main {
    text-align: center;
    width: 100%;
		max-width: calc(100% - 10px);
    margin: 0 auto;
    overflow: hidden;
	}
  
  .content{
    background-color: #37474f;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
      overflow-x: hidden;
		}
	}
</style>