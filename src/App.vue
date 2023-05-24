<script>
import AppHeader from "./components/AppHeader.vue"
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: { 
    AppHeader,
    AppMain,
  },
}


</script>

<template>
  <!-- <font-awesome-icon :icon="['fas', 'star']" /> -->
  <app-header />
  <app-main />
</template>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
