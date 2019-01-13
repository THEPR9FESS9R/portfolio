<template>
  <a class="a-txtLnk" :target="link.target" :href="link.href">{{ link.txt }}</a>
</template>

<script>
export default {
  name: 'TextLink',
  props: ['link']
}
</script>
