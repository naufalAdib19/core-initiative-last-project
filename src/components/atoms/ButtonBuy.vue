<script setup lang="ts">
    defineProps<{
        category?: string
    }>()
</script>

<template>
    <button :class="category == 'men\'s clothing' ? 'button-men' : 'button-women' ">Buy Now</button>
</template>

<style>
    .button-men, .button-women {
        width: 259px;
        height: 42px;
        font-size: 20px;
        color: white;
        
    }
    .button-women {
        background-color: var(--purple);
    }

    .button-men {
        background-color: var(--blue);
    }
</style>