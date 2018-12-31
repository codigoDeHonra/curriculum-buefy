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
<style>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

#app {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2d2d2d;
    color: white ;
}

</style>
