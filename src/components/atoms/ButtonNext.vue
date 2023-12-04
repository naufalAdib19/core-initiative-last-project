<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter';
    const state = useCounterStore();
    defineProps<{
        category?: string
    }>()
</script>

<template>
    <button 
        @click="state.increment"
        v-if="category == 'men\'s clothing' || category == 'women\'s clothing'" 
        :class="category == 'men\'s clothing' ? 'mens_next_button' : 'womens_next_button'">
        Next Product
    </button>
    <button @click="state.increment" v-else class="unavailable_button">
        Next Product
    </button>
</template>

<style>
    .mens_next_button, .womens_next_button, .unavailable_button {
        width: 259px;
        height: 42px;
        font-weight: 600;
        font-size: 20px;
    }
    .mens_next_button {
        background-color: white;
        color: var(--blue);
        border: 2px solid var(--blue);
    }
    .womens_next_button {
        background-color: white;
        color: var(--purple);
        border: 2px solid var(--purple);
    }
    .unavailable_button {
        background-color: white;
        border: 2px solid var(--grey)
    }
</style>