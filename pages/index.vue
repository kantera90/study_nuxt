<template>
  <section class="container">
    <div>

      <logo class="logo"/>

      <h1 class="title">ZELDA</h1>
      <h1 class="title title2">ZELDA</h1>
      <h2 class="subtitle"><div>神々のトライフォース</div></h2>

      <div class="links">
        <nuxt-link class="nantenbo" to="/doc2">&copy;1991 Nantenbo</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.logo{
  transform: scale(0.9);
}



.container {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000;


/*
  background-image: url('/background.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
*/
}


*{
  cursor: default;
    user-select: none;
}
.title {
    display: block;
    /* width: 574px; */
    height: 380px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 214px;
    color: #c7090f;
    letter-spacing: 8px;
    font-weight: 400;

    animation: fadein 1s ease-out forwards 2s;
    opacity: 0;
    z-index: 1;

}

.title.title2 {
    z-index: 0;
    color: black;
    text-shadow: 3px 3px 0px #fff;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
}

.subtitle {
    width: 630px;
    height: 220px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    animation: fadein 1s ease-out forwards 3.5s;
    opacity: 0;
}
.subtitle > div {
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  font-weight: bold;
  font-size: 18px;
  color: #FFF;
  word-spacing: 5px;
  padding-bottom: 15px;
  background: #5037b5;
  border: 2px solid #fff;
  padding: 4px 12px;
  font-family: "ＭＳ ゴシック", sans-serif;
  transform: scale(  1.2, 1);
}

.links {
  padding-top: 96px;

}
.nantenbo {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  text-decoration: none;
}


@keyframes fadein{
    100%{
      opacity: 1;
    }
}

</style>
