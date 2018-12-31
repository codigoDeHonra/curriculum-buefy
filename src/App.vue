<template>
  <div id="app">
      <nav class="navbar is-fixed-top is-info" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
              <a class="navbar-item" href="#">
                  <img src="./assets/logo.png" height="44"/>
              </a>
              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>
          <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                  <a class="navbar-item" href="https://www.linkedin.com/in/wouerner/">Linkedin</a>
              </div>
          </div>
      </nav>
        <router-view/>
  </div>
</template>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

@import url('https://fonts.googleapis.com/css?family=Varela+Round');

// Set your colors
$primary:#706fd3;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

$dark: #2e3131;

$primary-invert: findColorInvert($primary);
$grey-darker-invert: $white;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

#app {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2d2d2d;
    color: white ;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
