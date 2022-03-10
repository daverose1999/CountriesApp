<template>
  <div id="app">
    <div class="background"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
/*link*/
$routerweight: 400;
$headingfontsize: 20px;
$fontcolor: #000000;
$background: #ffffff;

* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Nunito Sans;
  background-color: var(--background-color);
  color: var(--text-color);
  font-weight: $routerweight;
}
.background {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: var(--background-color);
  height: 100%;
  width: 100%;
  overflow: hidden;
}
/* main.css */
:root {
  /* Variables for default theme (light-mode) */
  --background-color: white;
  --text-color: black;
  --input-color: #858585;
  --card-color: white;
  --skeleton-color: #e2e2e2;
}

[data-theme="darkMode"] {
  /* Variables for dark mode */
  --background-color: #202d36;
  --text-color: white;
  --input-color: #ffffff;
  --card-color: #2b3743;
  --skeleton-color: #535f6b;
}
</style>
