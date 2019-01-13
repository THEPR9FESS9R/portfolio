<template>
    <div class="galaxy">
        <Planet v-for="planet in planets" :key="planet.d" :d="planet.d" :fill="planet.color" :deltaSun="planet.deltaSun" />
        <Planet :d="planets.sun.d" :fill="planets.sun.color" />
        <Planet :d="planets.earth.d" :fill="planets.earth.color" :deltaSun="planets.earth.deltaSun"/>
        <Planet :d="planets.mars.d" :fill="planets.mars.color" :deltaSun="planets.mars.deltaSun"/>
        <Planet :d="planets.mercure.d" :fill="planets.mercure.color" :deltaSun="planets.mercure.deltaSun"/>
    </div>
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
            scale: 1,
            deltaScale: 5000000,
            planets: {
                sun: {
                    d: 139101,
                    deltaSun: 0,
                    color: '#FDB813'
                },
                earth: {
                    d: 12742,
                    deltaSun: 149600000,
                    color: '#0077be'
                },
                jupiter: {
                    d: 139822,
                    deltaSun: 778500000,
                    color: '#ff00ff'
                },
                mars: {
                    d: 6779,
                    deltaSun: 227900000,
                    color: '#b22e20'
                },
                mercure: {
                    d: 4879,
                    deltaSun: 57910000,
                    color: '#ada8a5'
                },
                venus: {
                    d: 12104,
                    deltaSun: 108200000,
                    color: '#ff00ff'
                },
                saturn: {
                    d: 116464,
                    deltaSun: 1434000000,
                    color: '#ff00ff'
                },
                neptun: {
                    d: 49244,
                    deltaSun: 4495000000,
                    color: '#ff00ff'
                },
                pluto: {
                    d: 2377,
                    deltaSun: 5900000000,
                    color: '#ff00ff'
                },
                uranus: {
                    d: 50724,
                    deltaSun: 2871000000,
                    color: '#ff00ff'
                },
                mond: {
                    d: 3474,
                    deltaEarth: 384400,
                    color: '#ff00ff'
                }
            }
        };
    },
    beforeMount () {
        var keySet = Object.keys(this.planets);

        for (let i = 0; i < keySet.length; i++) {
            const planet = this.planets[keySet[i]];
            planet.d /= this.scale;
            planet.r = planet.d / 2;
            planet.deltaSun /= this.deltaScale;
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

