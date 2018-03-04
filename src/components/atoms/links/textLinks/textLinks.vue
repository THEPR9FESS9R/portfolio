<template>
  <a class="a-txtLnk" v-bind:target="link.target" v-bind:href="link.href">{{ link.txt }}</a>
</template>

<script>
export default {
  name: 'TextLink',
  props: ['link']
}
</script>
