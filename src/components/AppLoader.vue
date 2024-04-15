<script>

export default {
    name: 'AppLoader'
}

</script>

<template>

    <div class="ms-container d-flex justify-content-center align-items-center">
        <div class="ms-loader-wrapper d-flex flex-column justify-content-center align-items-center">
            <div class="loader"></div>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

.ms-container {
    height: calc(100vh - 60px);

    .ms-loader-wrapper {
        width: 50%;
        height: 600px;
        border: 4px solid #fff;
        border-radius: 120px;
        background-color: rgba(255, 255, 255);
        backdrop-filter: blur(1.5rem);
        opacity: 0.5;
        filter: drop-shadow(2px 2px);



        .loader {
            width: 150px;
            aspect-ratio: 1;
            border-radius: 50%;
            padding: 3px;
            background:
                radial-gradient(farthest-side, #ffa516 95%, #0000) 50% 0/12px 12px no-repeat,
                radial-gradient(farthest-side, #0000 calc(100% - 5px), #ffa516 calc(100% - 4px)) content-box;
            animation: loading 2s infinite;
        }

        @keyframes loading {
            to {
                transform: rotate(1turn)
            }
        }

    }
}
</style>





/* HTML:
<div class="loader"></div> */
.loader {
width: 50px;
aspect-ratio: 1;
border-radius: 50%;
padding: 3px;
background:
radial-gradient(farthest-side,#ffa516 95%,#0000) 50% 0/12px 12px no-repeat,
radial-gradient(farthest-side,#0000 calc(100% - 5px),#ffa516 calc(100% - 4px)) content-box;
animation: l6 2s infinite ;
}
@keyframes l6 {to{transform: rotate(1turn)}}
