<template>
  <div id="app">
    <FloatingButton/>
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/organisms/header/header'
import Content from './components/organisms/mainContent/mainContent'
import Footer from './components/organisms/footer/footer'
import FloatingButton from './components/atoms/buttons/floatingButton/floatingButton';

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    FloatingButton
  }
}
</script>
