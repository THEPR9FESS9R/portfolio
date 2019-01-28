<template>
    <header class="o-header">
      <Navigation/>
    </header>
</template>
<script>

import Navigation from './../navigation/navigation'

export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
.o-header {
    background-color: $header-bg-color;
    min-height: $header-min-height;
    color: $header-color;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    @extend %down-shadow;
}
</style>


