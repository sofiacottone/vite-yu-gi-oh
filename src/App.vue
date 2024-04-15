<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMainCards from './components/AppMainCards.vue'
import AppLoader from './components/AppLoader.vue';

export default {
    components: {
        AppHeader,
        AppMainCards,
        AppLoader
    },
    data() {
        return {
            store
        };
    },
    methods: {
        getCardsFromApi() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((response) => {
                    store.cards = response.data;
                    store.isLoading = false;
                });
        }
    },
    mounted() {
        this.getCardsFromApi();
    }
}
</script>

<template>
    <AppHeader></AppHeader>

    <main>
        <AppMainCards v-if="!store.isLoading"></AppMainCards>
        <AppLoader v-else></AppLoader>
    </main>
</template>

<style lang="scss">
@use './style/generic';
</style>
