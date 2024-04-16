<script>
import { store } from '../store.js'

export default {
    name: 'AppSelect',
    data() {
        return {
            store
        }
    },
    methods: {
        resetSelection() {
            store.selectedItem = '';
        }
    }

}

</script>

<template>
    <div class="d-flex align-items-center pt-4 ps-5">
        <select @change="$emit('selectionPerformed')" v-model="store.selectedItem" class="border-1 rounded p-1 me-1">
            <option value="">Select Archetype</option>

            <!-- options -->
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name
                }}
            </option>

        </select>

        <button @click="resetSelection()" class="btn btn-light py-1 px-2" type="reset">Reset</button>

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
