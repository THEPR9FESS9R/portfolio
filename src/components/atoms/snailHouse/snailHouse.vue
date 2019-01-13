<template>
    <svg class="snailHouse -fillAnimation" viewBox="0 0 500 500">
        <path class="snailHouse__path" ref="path" fill="transparent" stroke="black"/>
    </svg>
</template>

<script>
export default {
    name: 'snailHouse',
    mounted () {
        var length = this.$refs.path.getTotalLength();
        // this.$refs.path.style.setProperty('--stroke-offset-end', length);
        // this.$refs.path.style.setProperty('--stroke-dasharray-end', 0);
    }
}
</script>
