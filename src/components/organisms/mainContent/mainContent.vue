<template>
  <main class="pageGrid__body o-mainContent">
      <div class="o-mainContent__content">
        <img src="../../../assets/logo.png">
        <!-- <img src="../../../assets/cologne_skyline.jpeg"> -->
        <Banner/>
        <HelloWorld/>
      </div>
    </main>
</template>

<script>
import HelloWorld from '../../HelloWorld'
import Banner from '../../atoms/banner/banner'
export default {
    name: 'Content',
    components: {
        HelloWorld,
        Banner
    }
}
</script>
