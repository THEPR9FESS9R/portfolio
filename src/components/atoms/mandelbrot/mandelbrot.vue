<template>
    <canvas class="mandelbrot" :ref="'canvas'" :width="svgSize" :height="svgSize"></canvas>
</template>

<script>
import createSvg from './mandelbrotHelper' 
export default {
    name: "MandelBrot",
    data () {
        return {
            svgSize: 801,
        }
    },
    computed: {
        viewBox () {
            return `0 0 ${this.svgSize} ${this.svgSize}`;
        },
        path () {
        }
    },
    mounted () {
        this.$refs.canvas.getContext("2d");
        return createSvg(this.svgSize, this.$refs.canvas);
    }
}
</script>

<style lang="scss">
.mandelbrot {
    height: 800px;
    width: 800px;
    border: 1px solid var(--color);
    background-color: white;
}
</style>
