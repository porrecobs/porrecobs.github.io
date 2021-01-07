<script>
  export let devName;
  export let devProfileInfo;
  let avatar = 'about-me/avatar.png';
  let icon = 'icons/flutter.png';

  import Icon from 'fa-svelte';
  import { faMapMarkerAlt, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
    
</script>
<div class="about-me-container">
  <div class="row">
    <div class="col lg-4">
      <div class="avatar-container">
        <img src={avatar} class="avatar" alt="avatar memoji em fundo preto"/>
      </div>
      <div class="status">
        <img src={icon} class="icon" alt="ícone do flutter"/> {devProfileInfo.motto}
      </div>
    </div>
    <div class="col lg-6">
      <h1 class="primary-text title">
        {devName}
      </h1>
      <p class="subtitle">Front-End & Mobile Developer</p>
      <div class="light">
        <Icon icon={faMapMarkerAlt}/>
        <span>{devProfileInfo.location}</span>
      </div>
      <div class="light">
        <Icon icon={faLaptopHouse}/>
        <span>{devProfileInfo.currentJob}</span>
      </div>
    </div>
  </div>
  
    <div class="row about-me-details">
      <div class="col lg-4">
        <h1 class="title">
          Sobre
        </h1>
        <span>
          {devProfileInfo.aboutMeText}
        </span>
      </div>
      <div class="col lg-2"></div>
      <div class="col lg-2"></div>
    </div>

</div>

<style>
  .about-me-container {
    position: relative;
    border: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: initial;
    background-color: transparent;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background-color: #102027;
  }
  
  .col {
    position: relative;
    width: 100%;
    min-height: 1px;
  }

  .avatar-container {
    border: .5rem solid #fff;
    border-radius: 50%;
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    max-width: 300px;
    width: 100%;
    text-align: center;
  }

  .status {
    text-align: center;
    color: #fff;
    padding: .5em 0 1em 0;
  }

  .primary-text {
    font-size: 60px;
    line-height: 1;
    letter-spacing: -2px;
  }

  .title {
		color: #ccff00;
		font-size: 4em;
    font-weight: 100;
    padding: 0;
    margin: 1rem 0;
  }

  .subtitle {
    color: #fff;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
  }

  div :global(.light) {
    color: #b0bec5;
    margin-bottom: .5rem;
  }

  .light span {
    font-weight: 100;
  }

  .about-me-details {
    background-color: #fff;
    color: #62727b;
    padding: 0 1em 2em 1em;
  }

  .about-me-details .title {
    font-weight: 200;
    color: inherit;
    font-size: 2em;
  }

  @media (min-width: 992px) {

    .status {
      display: none;
    }

    .lg-2 {
      -ms-flex: 0 0 16.67%;
      flex: 0 0 16.67%;
      max-width: 16.67%;
    }

    .lg-4 {
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .lg-6 {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }

    .avatar-container {
      -webkit-box-shadow: 2px 2px 10px 0px rgba(0,0,0,.5);
    -moz-box-shadow: 2px 2px 10px 0px rgba(0,0,0,.5);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,.5);
    }

    .about-me-container {
      width: calc(100% + 2rem);
      
    }

    .row {
      max-height: 300px;
    }
  }

</style>