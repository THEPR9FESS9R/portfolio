<template>

  <div class="hello">
    <H1
      v-bind:headline="welcomeMsg"
    ></H1>  
    <H2 
      v-bind:headline="essentialsHeadline"
    ></H2>
    <LinkList
      v-bind:links="essentialLinks"
    />
    <H2 
      v-bind:headline="ecosystemHeadline"
    ></H2>
    <LinkList
      v-bind:links="ecosystemLinks"
    />
  </div>
</template>

<script>
import H1 from './atoms/typography/headlines/h1'
import H2 from './atoms/typography/headlines/h2'
import LinkList from './molecules/linkList/linkList'

export default {
  name: 'HelloWorld',
  components: {
    LinkList,
    H1,
    H2
  },
  data () {
    return {
      welcomeMsg: {
        txt: 'Welcome to Your Vue.js App',
        class: 'helloWorld__headline'
      },
      essentialsHeadline: {
        txt: 'Essential Links',
        class: 'helloWorld__headline'
      },
      ecosystemHeadline: {
        txt: 'Ecosystem',
        class: 'helloWorld__headline'
      },
      essentialLinks: [
        {
          href: 'https://vuejs.org',
          target: '_blank',
          txt: 'Core Docs'
        },
        {
          href: 'https://forum.vuejs.org',
          target: '_blank',
          txt: 'Forum'
        },
        {
          href: 'https://chat.vuejs.org',
          target: '_blank',
          txt: 'Chat'
        },
        {
          href: 'https://twitter.com/vuejs',
          target: '_blank',
          txt: 'Twitter'
        },
        {
          href: 'http://vuejs-templates.github.io/webpack/',
          target: '_blank',
          txt: 'Docs for This Template'
        }
      ],
      ecosystemLinks: [
        {
          href: 'http://router.vuejs.org/',
          target: '_blank',
          txt: 'vue-router'
        },
        {
          href: 'http://vuex.vuejs.org/',
          target: '_blank',
          txt: 'vuex'
        },
        {
          href: 'http://vue-loader.vuejs.org/',
          target: '_blank',
          txt: 'vue-loader'
        },
        {
          href: 'https://github.com/vuejs/awesome-vue',
          target: '_blank',
          txt: 'awesome-vue'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->
