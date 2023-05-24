<script>
import AppHeader from "./components/AppHeader.vue"
export default {
  data() {
    return {

    }
  },
  components: { 
    AppHeader,
  },
}


</script>

<template>
  <main>
    <app-header />
  </main>
</template>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  height: 100vh;
}

</style>
