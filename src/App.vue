<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMainCards from './components/AppMainCards.vue'

export default {
    components: {
        AppHeader,
        AppMainCards
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