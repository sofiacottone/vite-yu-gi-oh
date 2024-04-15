<script>

export default {
    name: 'SingleCard',
}

</script>

<template>

    <div class="ms-single-card text-center">
        <img src="https://images.ygoprodeck.com/images/cards_small/34541863.jpg" alt="">
        <div class="text-white text-uppercase h5 py-3">
            name
        </div>
        <div class="pb-4">
            Species
        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-single-card {
    width: calc(100% / 5 - 20px);
    background-color: $main-orange;

    img {
        width: 100%;
    }
}
</style>
