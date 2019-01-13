<template>
  <h1 class='a-headline -h1' :class="headline.class">{{ headline.txt }}</h1>
</template>

<script>
export default {
    name: 'H1',
    props: ['headline']
}
</script>
