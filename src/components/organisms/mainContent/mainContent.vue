<template>
  <main class="pageGrid__body o-mainContent">
      <div class="o-mainContent__content">
        <img src="../../../assets/logo.png">
        <HelloWorld/>
      </div>
    </main>
</template>

<script>
import HelloWorld from '../../HelloWorld'
export default {
    name: 'Content',
    components: {
        HelloWorld
    }
}
</script>
