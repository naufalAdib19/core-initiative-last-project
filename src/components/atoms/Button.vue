<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter';
    const globalState = useCounterStore();
    defineProps<{
        category?: string
    }>()
</script>

<template>
    <button @click="globalState.increment" :class="category == 'men\'s clothing' ? 'button-men' : 'button-women'">Next Product</button>
</template>

<style>
    .button-men, .button-women {
        width: 259px;
        height: 42px;
        font-size: 20px;
        background-color: white;
    }
    .button-women {
        color: var(--purple);
        border: 3px solid var(--purple);
    }

    .button-men {
        color: var(--blue);
        border: 3px solid var(--blue)
    }
</style>
