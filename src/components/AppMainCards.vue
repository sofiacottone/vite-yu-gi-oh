<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppMainCards',
    components: {
        SingleCard
    }
}

</script>

<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center bg-light p-5 m-5">
                <div class="bg-dark">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione quis impedit porro illum
                    fugit iusto quidem accusamus quod libero quam amet cupiditate perspiciatis modi atque labore, culpa
                    voluptatibus voluptates!
                </div>
                <!-- cards  -->
                <div class="d-flex justify-content-around flex-wrap gap-4">
                    <SingleCard></SingleCard>
                    <SingleCard></SingleCard>
                    <SingleCard></SingleCard>
                    <SingleCard></SingleCard>
                    <SingleCard></SingleCard>
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
