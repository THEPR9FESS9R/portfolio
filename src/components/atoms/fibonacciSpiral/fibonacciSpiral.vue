<template>
    <div class="fibonacciSpiral">
        <div class="fibonacciSpiral__wrapper">
            <img class="fibonacciSpiral__img" src="../../../assets/Mona_Lisa.jpg"/>
            <svg class="fibonacciSpiral__spiral" :viewBox="viewBox">
                <!-- <image xlink:href="../../../assets/Switzerland_Houses_491270_1920x1080.jpg" height="100%"/> -->
                <path :d="path" ref="path" fill="transparent" stroke="white"/>
            </svg>
        </div>
    </div>
</template>

<script>
import { createPath } from './fibonacciUtils'
export default {
    name: 'fibanacciSpiral',
    data () {
        return {
            viewBoxX: 612,
            viewBoxY: 379
        }
    },
    mounted () {
        // var length = this.$refs.path.getTotalLength();
        // // this.$refs.path.style.setProperty('--stroke-offset-end', length);
        // // this.$refs.path.style.setProperty('--stroke-dasharray-end', 0);
    },
    computed: {
        path () {
            return createPath();
        },
        viewBox () {
            return `0 0 ${this.viewBoxX} ${this.viewBoxY}`;
        }
    }
}
</script>
