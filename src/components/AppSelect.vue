<script>
import { store } from '../store.js'

export default {
    name: 'AppSelect',
    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <div class="pt-4 ps-5">
        <select v-model="store.selectedItem" class="border-1 rounded p-1">
            <option value="">Select Archetype</option>

            <!-- options -->
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name
                }}
            </option>

        </select>

    </div>

</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *;

div {
    background-color: $main-orange;

    select {
        outline-color: $main-orange;
        border: 2px solid $main-orange;
    }

}
</style>
