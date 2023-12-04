<script setup lang="ts">
    defineProps<{
        category?: string
    }>()
</script>

<template>
    <button :class="category == 'men\'s clothing' ? 'button_buy_men' : 'button_buy_women' ">Buy Now</button>
</template>

<style>
    .button_buy_men, .button_buy_women {
        width: 259px;
        height: 42px;
        font-size: 20px;
        color: white;
        border: none;
        outline: none;
        
    }
    .button_buy_women {
        background-color: var(--purple);

    }

    .button_buy_men {
        background-color: var(--blue);
    }
</style>