<template>
  <main class="pageGrid__body o-mainContent">
      <div class="o-mainContent__content">
        <!-- <img src="../../../assets/logo.png"> -->
        <!-- <img src="../../../assets/cologne_skyline.jpeg"> -->
        <Banner/>
        <SnailHouseText/>
        <SnailHouse/>
        <!-- <HelloWorld/> -->
      </div>
    </main>
</template>

<script>
import HelloWorld from '../../HelloWorld'
import Banner from '../../atoms/banner/banner'
import SnailHouseText from '../../atoms/snailHouseText/snailHouseText'
import SnailHouse from '../../atoms/snailHouse/snailHouse'
export default {
    name: 'Content',
    components: {
        HelloWorld,
        SnailHouse,
        SnailHouseText,
        Banner
    }
}
</script>
