<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMainCards from './components/AppMainCards.vue'
import AppLoader from './components/AppLoader.vue';
import AppSelect from './components/AppSelect.vue';


export default {
    components: {
        AppHeader,
        AppMainCards,
        AppLoader,
        AppSelect
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
        },
        getArchetypesFromApi() {
            let apiUrl = 'https://db.ygoprodeck.com/api/v7/archetypes.php';
            const queryParams = {};

            axios.get(apiUrl, {
                params: queryParams
            })
                .then((response) => {
                    store.archetypes = response.data
                })
        }
    },
    mounted() {
        this.getCardsFromApi();
        this.getArchetypesFromApi();
    }
}
</script>

<template>
    <AppHeader></AppHeader>

    <main>
        <AppSelect></AppSelect>
        <AppMainCards v-if="!store.isLoading"></AppMainCards>
        <AppLoader v-else></AppLoader>
    </main>
</template>

<style lang="scss">
@use './style/generic';
</style>
