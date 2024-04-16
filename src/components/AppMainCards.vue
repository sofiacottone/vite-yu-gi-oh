<script>
import { store } from '../store.js'
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMainCards',
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center bg-light px-5 py-4 m-4">

                <!-- results  -->
                <div class="bg-dark text-white w-100 py-3 px-2">
                    Cards found: {{ store.cards.data.length }}
                </div>
                <!-- cards  -->
                <div class="d-flex flex-wrap gap-4">
                    <SingleCard v-for="card in store.cards.data" :key="card.id" :cardInfo="card"></SingleCard>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.container-fluid {
    background-color: $main-orange;
}
</style>
