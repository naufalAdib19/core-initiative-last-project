<script setup lang="ts">
    defineProps<{
        category?: string
    }>()
</script>

<template>
    <button :class="category == 'men\'s clothing' ? 'mens_next_button' : 'womens_next_button'">Next Product</button>
</template>

<style>
    .mens_next_button, .womens_next_button {
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
</style>