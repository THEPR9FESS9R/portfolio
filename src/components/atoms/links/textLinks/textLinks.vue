<template>
  <a class="a-txtLnk" v-bind:target="target" v-bind:href="href">{{ txt }}</a>
</template>

<script>
export default {
  name: 'textLinks',
  props: ['lnk'],
  data () {
    return {
      href: '//www.google.de',
      target: '_blank',
      txt: 'link'
    }
  }
}
</script>
