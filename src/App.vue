<template>
  <div id="app" class="pageGrid__body">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <textLinks>hallo</textLinks>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import textLinks from './components/atoms/links/textLinks/textLinks'

export default {
  name: 'App',
  components: {
    HelloWorld,
    textLinks
  }
}
</script>
<!--
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
chrome
