import { reactive } from "vue";

export const store = reactive({
    ArrMovies: [],
    ArrTvSeries: [],
    ArrGenres: [],
    searchBar: '',
    searchGenres: '',
    inputError: false,
    activeIndex: 0,
});