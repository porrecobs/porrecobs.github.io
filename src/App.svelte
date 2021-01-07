<script>
	export let devName;
	let avatar = 'about-me/avatar.png';
</script>

<main style="background-color: #000">
	<h1>Hello {devName}!</h1>
  <div class="avatar-container">
    <img src={avatar} class="avatar" alt="avatar memoji em fundo preto"/>
  </div>
</main>

<style>
	main {
		text-align: center;
		
		max-width: 310px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

  .avatar-container {
    border: .5rem solid #fff;
    border-radius: 50%;
    max-width: 300px;
    max-height: 300px;
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    max-width: 300px;
    width: 100%;
    max-height: 300px;
    text-align: center;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
      padding: 1rem;
		}
	}
</style>