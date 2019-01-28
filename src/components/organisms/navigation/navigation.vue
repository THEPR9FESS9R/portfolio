<template>
    <nav class="o-nav">
        <ul class="o-nav__base">
            <li class="o-nav__baseItem">
                <a href="#footer" class="o-nav__baseItemLink">Skills</a>
                <ul class="o-nav__secondLvl">
                    <li class="o-nav__secondLvlItem">
                        <a href="#footer" class="o-nav__secondLvlItemLink">Javascript</a>
                    </li>    
                    <li class="o-nav__secondLvlItem">
                        <a href="#footer" class="o-nav__secondLvlItemLink">SCSS</a>
                    </li>    
                    <li class="o-nav__secondLvlItem">
                        <a href="#footer" class="o-nav__secondLvlItemLink">HTML</a>
                    </li>    
                </ul>  
            </li>
            <li class="o-nav__baseItem">
                <a href="#footer" class="o-nav__baseItemLink">Projects</a>
            </li>
            <li class="o-nav__baseItem">
                <a href="#footer" class="o-nav__baseItemLink">Showcases</a>
            </li>
            <li class="o-nav__baseItem">
                <a href="#footer" class="o-nav__baseItemLink">Links</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
$nav-border-width: 1px;
$nav-border-style: solid;
$nav-border: $nav-border-width $nav-border-style $header-color;
$nav-border--transparent: $nav-border-width $nav-border-style transparent;
.o-nav {
    width: 100%;
    height: $header-min-height;
    background-color: $header-bg-color;

    $blockSelector: &;

    &__base,
    &__secondLvl {
        background-color: $header-bg-color;
    }

    &__base {
        display: flex;
        justify-content: center;
        position: relative;
    }
    
    &__baseItem {
    }
    
    &__secondLvlItemLink, 
    &__baseItemLink {
        width: 100%;
        border-left: $nav-border--transparent;
        border-right: $nav-border--transparent;
        display: inline-block;
        color: $header-color;
        line-height: $header-min-height;
        padding-left: $spacing-l;
        padding-right: $spacing-l;

        &:hover {
            border-left: $nav-border;
            border-right: $nav-border;
        }
    }

    &__secondLvl {
        position: absolute;
        top: 100%;
        border: $nav-border;
    }

    &__secondLvlItem {
    }


    &__secondLvlItemLink {

    }
}
</style>


