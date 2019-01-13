<template>
  <div id="app">
    <!-- <FloatingButton/>
    <Header/>
    <Content/>
    <Footer/> -->
    <Galaxy />
  </div>
</template>

<script>
import Header from './components/organisms/header/header'
import Content from './components/organisms/mainContent/mainContent'
import Footer from './components/organisms/footer/footer'
import FloatingButton from './components/atoms/buttons/floatingButton/floatingButton';
import Galaxy from './components/atoms/galaxy/galaxy'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer,
    FloatingButton,
    Galaxy
  }
}
</script>
