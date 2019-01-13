<template>
    <div :ref="'planet'" class="planet" :style="{ width: d + 'px', height: d + 'px', backgroundColor: fill}"></div>
    <!-- <div :ref="'planet'" class="planet" :style="{ backgroundColor: fill }"></div> -->
</template>

<script>
export default {
    name: 'Planet',
    props: {
        x: Number,
        path: String,
        d: Number,
        fill: String,
        deltaSun: Number
    },
    computed: {
        style () {
            return `width: ${this.d}; height: ${this.d};`;
        },
        viewBox () {
            return `0 0 ${this.viewBoxX} ${this.viewBoxY}`;
        }
    },
    mounted () {
        if (!this.deltaSun) {
            return false;
        }
        this.$refs.planet.style.setProperty('--planet-left', `${this.deltaSun}px`);
    }
}
</script>

<style lang="scss">
$planet-size: 20px;
.planet {
    --planet-left: 0px;
    border-radius: 50%;
    position: absolute;

    height: $planet-size;
    width: $planet-size;

    top: 50%;
    left: calc(50% - var(--planet-left));
    transform: translateY(-50%) translateX(-50%);
}
</style>

