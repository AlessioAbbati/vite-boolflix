<script>
import AppHeader from "./components/AppHeader.vue"
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  },
  components: { 
    AppHeader,
  },
}


</script>

<template>
  <!-- <font-awesome-icon :icon="['fas', 'star']" /> -->
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
