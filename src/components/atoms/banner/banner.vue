<template>
  <svg class="banner" viewbox="0 0 160 90">
  <filter id="knockoutSpecial">

   <!-- discards our green-screen fill, setting any green to a very low opacity using the -5" -->   
    <feColorMatrix in="SourceGraphic" result="empty-red" type="matrix" values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 -5 0 1 0"/>
   <!-- uses only the offset term to discard original text stroke color and it to our desired color -->   
    <feColorMatrix in="empty-red" result="recolor2" type="matrix" values="
                            0 0 0 0 0.5
                            0 0 0 0 0.5
                            0 0 0 0 0.5
                            0 0 0 1 0"/>
  <!-- superimposes our cut out text and our now empty text both at their correct color -->   
    <feComposite operator="over" in="recolor1" in2="recolor2"/>
  </filter>
  
  <image xlink:href="../../../assets/cologne_skyline.jpeg" points="0,0 0,90 160,0 160,90"/>
  <g filter="url(#knockoutSpecial)">
      
      <!-- uses pure red, green and blue colors purely for pixel selection in the filter - the content is recolored in the filter. Also positions part of our text off screen. We'll bring that back with our first filter term. -->  
    <text text-anchor="middle" stroke="blue" stroke-width="2" fill="green" x="50%" y="25%" font-size="124" font-weight="bold" font-family="helvetica">Stadt met K</text>
    
  </g>
  
  
</svg>
</template>
<script>
export default {
    name: 'banner'
}
</script>
