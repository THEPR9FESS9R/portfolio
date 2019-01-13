<template>
    <svg class="galaxy" :viewBox="viewBox" :height="svgSize" :width="svgSize">
        <Planet v-for="planet in planets" :key="planet.d" :cx="planet.cx" :fill="planet.color" :cy="planet.cy" :r="planet.r" :duration="planet.duration" :name="planet.name"/>
    </svg>
    <!-- <div class="galaxy">
        <Planet v-for="planet in planets" :key="planet.d" :d="planet.d" :fill="planet.color" :deltaSun="planet.deltaSun" />
        <Planet :d="planets.sun.d" :fill="planets.sun.color" />
        <Planet :d="planets.earth.d" :fill="planets.earth.color" :deltaSun="planets.earth.deltaSun"/>
        <Planet :d="planets.mars.d" :fill="planets.mars.color" :deltaSun="planets.mars.deltaSun"/>
        <Planet :d="planets.mercure.d" :fill="planets.mercure.color" :deltaSun="planets.mercure.deltaSun"/>
    </div> -->
</template>

<script>
import Planet from './models/planet'

export default {
    name: "Galaxy",
    components: {
        Planet
    },
    data () {
        return {
            svgSize: 800,
            scale: 1,
            deltaScale: 5000000,
            distance: 40,
            velocityScale: 0.4,
            planets: {
                sun: {
                    d: 139101,
                    deltaSun: 0,
                    color: '#FDB813',
                    order: 0,
                    velocity: 0,
                },
                earth: {
                    d: 12742,
                    deltaSun: 149600000,
                    color: '#0077be',
                    order: 3,
                    velocity: 6.7
                },
                jupiter: {
                    d: 139822,
                    deltaSun: 778500000,
                    color: '#c99039',
                    order: 5,
                    velocity: 4.7051
                },
                mars: {
                    d: 6779,
                    deltaSun: 227900000,
                    color: '#b22e20',
                    order: 4,
                    velocity:  8.6871
                },
                mercury: {
                    d: 4879,
                    deltaSun: 57910000,
                    color: '#ada8a5',
                    order: 1,
                    velocity: 17.0505
                },
                venus: {
                    d: 12104,
                    deltaSun: 108200000,
                    color: '#e7d520',
                    order: 2,
                    velocity: 12.6077
                },
                saturn: {
                    d: 116464,
                    deltaSun: 1434000000,
                    color: '#ead6b8',
                    order: 6,
                    velocity: 3.4821
                },
                neptun: {
                    d: 49244,
                    deltaSun: 4495000000,
                    color: '#5b5ddf',
                    order: 8,
                    velocity: 1.9720
                },
                pluto: {
                    d: 2377,
                    deltaSun: 5900000000,
                    color: '#d1e7e7',
                    order: 9,
                    velocity: 5.3979
                },
                uranus: {
                    d: 50724,
                    deltaSun: 2871000000,
                    color: '#e1eeee',
                    order: 7,
                    velocity: 2.4607
                }
                // mond: {
                //     d: 3474,
                //     deltaEarth: 384400,
                //     color: '#ff00ff',
                //     order: 0
                // }
            }
        };
    },
    beforeMount () {
        const PI = 3.14159265358979;
        var keySet = Object.keys(this.planets);

         

        for (let i = 0; i < keySet.length; i++) {
            const planet = this.planets[keySet[i]];
            planet.d /= this.scale;
            planet.r = this.distance * planet.order;
            planet.deltaSun = this.distance * planet.order;
            planet.cx = this.svgSize / 2  + planet.r;
            planet.cy = this.svgSize / 2;

            var orbit = 2 + PI + planet.r;
            planet.duration = orbit / (planet.velocity * this.velocityScale);
            planet.name = keySet[i];
        }
    },
    computed: {
        viewBox () {
            return `0 0 ${this.svgSize} ${this.svgSize}`
        }
    }
}
</script>

<style lang="scss">
    .galaxy {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>

