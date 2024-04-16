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
            store,
            queryParams: {
                num: 20,
                offset: 0,
            }
        };
    },
    methods: {
        getCardsFromApi() {
            let apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';

            if (store.selectedItem == '') {
                this.queryParams.archetype = undefined;
            } else {
                this.queryParams.archetype = store.selectedItem;
            };
            console.log(this.queryParams.archetype);
            axios.get(apiUrl, {
                params: this.queryParams
            })
                .then((response) => {
                    store.cards = response.data;
                    store.isLoading = false;
                });
        },
        getArchetypesFromApi() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
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
        <AppSelect @selectionPerformed="getCardsFromApi" @click="getCardsFromApi()"></AppSelect>
        <AppMainCards v-if="!store.isLoading"></AppMainCards>
        <AppLoader v-else></AppLoader>
    </main>
</template>

<style lang="scss">
@use './style/generic';
</style>
