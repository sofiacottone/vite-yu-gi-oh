<script>

export default {
    name: 'SingleCard',
    props: ['cardInfo']
}

</script>

<template>

    <div class="ms-single-card text-center">
        <img :src="cardInfo.card_images[0].image_url_small" alt="">
        <div id="card-name" class="text-white text-uppercase py-3">
            {{ cardInfo.name }}
        </div>
        <div class="pb-4">
            {{ cardInfo.archetype }}
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

    #card-name {
        font-size: 18px;
        padding-inline: 2px;
        word-wrap: break-word;
    }
}
</style>
