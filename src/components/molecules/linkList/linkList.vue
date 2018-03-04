<template>
    <ul class="m-linkList">
        <li class="m-linkList__item"
            v-for="link in links"
            v-bind:key="link.href">
                <TextLink
                    v-bind:link="link"
                ></TextLink>
        </li>
    </ul>
</template>

<script>
import TextLink from '../../atoms/links/textLinks/textLinks'
export default {
  name: 'LinkList',
  props: ['links'],
  components: {
    TextLink
  }
}
</script>

<style>

</style>
