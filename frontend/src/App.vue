<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

/* ==========================================================================
   #RESET
   ========================================================================== */
/**
 * A very simple reset that sits on top of Normalize.css.
 */
body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
p,
pre,
dl,
dd,
ol,
ul,
figure,
hr,
fieldset,
legend {
  margin: 0;
  padding: 0;
}

.button {
  background-color: #6ebdff !important;
  border: none;
  color: #fff !important;
  outline: none;
  font-weight: bold;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  margin-top: 20px;
}

button,
button:focus,
button:hover,
button:active {
  border: #6ebdff !important;
  color: #fff !important;
  outline: none !important;
}

#app {
  font-family: Lato, sans-serif !important;
  font-weight: 400;
  line-height: 1.5;
}

.black-text {
  color: #2f3539 !important;
}

.light-black {
  color: #667480 !important;
}
</style>
