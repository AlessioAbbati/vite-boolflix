<script>
import { store } from '../store';
import AppMovies from './AppMovies.vue';
import AppTvSeries from './AppTvSeries.vue';

export default {
    data() {
        return {
           store,
        }
    },
    components: {
        AppMovies,
        AppTvSeries,
    },
    methods: {
        emitSearchBar() {
            this.$emit('performSearch');
        },
        emitChange() {
            this.$emit('performGenres');
        },
        // activeJumbo(element) {
        //     this.store.activeIndex = this.store.indexOf(element);
        // },
    },

};
</script>

<template>
  <div class="header">
    <img src="../assets/logo.png" alt="">
    <div class="search">
        <select v-model="store.searchGenres" @change="emitChange">
            <option value="">Seleziona una categoria</option>
            <option v-for="genre in store.ArrGenres" :key="genre.id" value="genre.id">{{ genres.name }}</option>
        </select>
        <input type="text" v-model="store.searchBar" @keyup.enter="emitSearchBar" placeholder="Cerca film o serie tv">
        <button @click="emitSearchBar">Cerca</button>
        <div>
            <small v-show="store.inputError" style="color: red;">Digita qualcosa qualcosa per avviare la ricerca</small>
        </div>
    </div>
    <!-- <div>
        <img :src="'http://image.tmdb.org/t/p/w342/' + store.ArrMovies[store.activeIndex].store.backdrop_path" alt="">
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
   .header {
    background-color: black;
    height: 6rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 13%;
    }
    .search {
        select {
            margin-right: 1rem;
        }
        button {
            padding: .3rem;
            color: black;
            background-color: #DC1A28;
            margin-left: 1rem;
        }
    }
    }
</style>