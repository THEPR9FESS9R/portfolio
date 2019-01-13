<template>
  <button class="a-floatingButton" v-on:click="invert">invert
  </button>
</template>

<script>
export default {
    methods: {
        invert: function(event) {
            document.body.classList.toggle('-inverted');
        }   
    }
}
</script>

<style>

</style>
