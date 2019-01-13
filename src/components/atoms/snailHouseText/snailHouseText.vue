<template>
  <svg class="snailHouseText" :viewBox="viewBox"
     xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="MyPath"
         :d="path" />
  </defs>

  <!-- <use xlink:href="#MyPath" fill="none" stroke="red"  /> -->

  <text class="snailHouseText__text">
    <textPath xlink:href="#MyPath" startOffset="0.5%">
      {{txt}}
    </textPath>
  </text>
</svg>
</template>

<script>
// import buildPath from './snailHouseUtils.js'
import { createPathReversed } from './snailHouseUtils.js'
export default {
  name: "snailHouseText",
  data () {
      return {
          id: null,
          txt: 'wow! txt me! much full. plz full, wow. want lorem! much ipsum. much full. much ipsum. go doge! oh my text, such sit! txt me. very adipiscing. many word. go layout! i iz cute?. i iz cute?. plz swag. need design, many word. plz full, much full. much ipsum. so lorem. go layout! txt me, very word, wow! oh my lorem. want swag, very adipiscing. very word. rate me! rate me, such doge! many ipsum, go layout! such text. much full. i iz cute?! need layout, need layout, plz consectetur! wow. wow, wow! need layout, so dolor. very swag! ',
          viewBoxSize: 300
      }
  },
  computed: {
      path () {
          return createPathReversed(this.viewBoxSize, this.viewBoxSize, 20, true);
      },
      viewBox () {
          return `0 0 ${this.viewBoxSize} ${this.viewBoxSize}`;;
      }
  },
  mounted () {
      this.id = this._uid;
  }
};
</script>