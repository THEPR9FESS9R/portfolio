<template>
  <main class="pageGrid__body o-mainContent">
      <div class="o-mainContent__content">
        <!-- <img src="../../../assets/logo.png"> -->
        <!-- <img src="../../../assets/cologne_skyline.jpeg"> -->
        <!-- <Mandelbrot/> -->
        <Galaxy/>
        <!-- <FibanacciSpiral/> -->
        <!-- <Banner/> -->
        <!-- <SnailHouseText/> -->
        <!-- <SnailHouse/> -->
        <!-- <HelloWorld/> -->
      </div>
    </main>
</template>

<script>
import HelloWorld from '../../HelloWorld'
import Banner from '../../atoms/banner/banner'
import SnailHouseText from '../../atoms/snailHouseText/snailHouseText'
import SnailHouse from '../../atoms/snailHouse/snailHouse'
import FibanacciSpiral from '../../atoms/fibonacciSpiral/fibonacciSpiral'
import Galaxy from '../../atoms/galaxy/galaxy'
import Mandelbrot from '../../atoms/mandelbrot/mandelbrot'

export default {
    name: 'Content',
    components: {
        FibanacciSpiral,
        HelloWorld,
        SnailHouse,
        SnailHouseText,
        Banner,
        Galaxy,
        Mandelbrot
    }
}
</script>
