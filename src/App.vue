<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMainCards from './components/AppMainCards.vue'

export default {
    components: {
        AppHeader,
        AppMainCards
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
        <AppMainCards></AppMainCards>
    </main>
</template>

<style lang="scss">
@use './style/generic';
</style>