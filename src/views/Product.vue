<template>
    <div class="product_page_container">
        <div class="card_section">
            <Card/>
        </div>
        <div :class="state.current_product_category == 'men\'s clothing' ? 'mens_bg' : 
        state.current_product_category == 'women\'s clothing' ? 'womens_bg' : 'unavailable_bg'"/>

    </div>
    
</template>

<script lang="ts">
    import { useCounterStore } from '@/stores/counter';
    import Card from '../components/organisms/Cards.vue'

    export default {
        components: {
            Card
        },
        setup() {
            const state = useCounterStore()
            
            return {
                state
            }
        },
    };
</script>

<style>

    .card_section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .product_page_container {
        height: 100vh;
    }

    .womens_bg, .mens_bg, .unavailable_bg {
        height: 65%;
    }

    .womens_bg {
        background-color: var(--purple);
    }
    .mens_bg {
        background-color: var(--blue);
    }
    .unavailable_bg {
        background-color: var(--grey-lighten);
    }
</style>