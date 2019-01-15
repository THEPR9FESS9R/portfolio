<template>
    <g>
        <path :id="id" :d="path" :stroke="fill" :fill="'transparent'" />
        <g>
            <circle :r="'10'" :fill="fill" :style="{ motionPath: path }">
            </circle>
            <text class="planet__name" :style="{ fill: fill }" text-anchor="middle" y="20px">
                {{name}}
            </text>
            <animateMotion :dur="duration + 's'" repeatCount="indefinite">
                <mpath :xlink:href="'#' + id"></mpath>
            </animateMotion>
        </g>
    </g>
    <!-- <div :ref="'planet'" class="planet" :style="{ width: d + 'px', height: d + 'px', backgroundColor: fill}"></div> -->
    <!-- <div :ref="'planet'" class="planet" :style="{ backgroundColor: fill }"></div> -->
</template>

<script>
import { createArcPath, createMoveToPath } from './../../../../js/utils/pathUtils'
export default {
    name: 'Planet',
    data () {
        return {
            id: null
        }
    },
    props: {
        cx: Number,
        cy: Number,
        // path: String,
        r: Number,
        duration: Number,
        fill: String,
        name: String,
    },
    computed: {
        style () {
            return `width: ${this.d}; height: ${this.d};`;
        },
        viewBox () {
            return `0 0 ${this.viewBoxX} ${this.viewBoxY}`;
        },
        path () {
            var path = createMoveToPath('', this.cx, this.cy);
            // var path = '';

            path = createArcPath(path, this.r, 0, this.cx - 2 * this.r, this.cy);
            path = createArcPath(path, this.r, 0, this.cx, this.cy);
            path = `${path} Z`;
            return path;
        }
    },
    mounted () {
        this.id = this._uid;
        if (!this.deltaSun) {
            return false;
        }
        this.$refs.planet.style.setProperty('--planet-path', `${this.deltaSun}px`);
    }
}
</script>

<style lang="scss">
.planet {
    &__name::first-letter {
        text-transform: uppercase;
    }
}
</style>

