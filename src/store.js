import { reactive } from "vue";

export const store = reactive({
    cards: [],
    archetypes: [],
    isLoading: true,
    selectedItem: ''
});