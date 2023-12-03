<template>
    <div class="container">
        <p>{{ totalRating }} / 5</p>
        <div class="rounded">
            <div 
            v-for="n in 5" 
            class="rounded-div" 
            :class="category == 'men\'s clothing' ? 
            `men ${n <= roundedNumber ? 'men-rated' : ''}` : 
            `women ${n <= roundedNumber ? 'women-rated' : ''}`"
            />
        </div>
        
    </div>
</template>

<style>
    .container {
        display: flex;
        column-gap: 5px;
    }

    .men {
        border: 1.5px solid var(--blue);
    }

    .men-rated {
        background-color: var(--blue);
    }

    .women {
        border: 1.5px solid var(--purple);
    }

    .women-rated {
        background-color: var(--purple);
    }
    
    div.rounded-div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
    }

    .rounded {
        display: flex;
        column-gap: 2px;
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { ref } from 'vue';
    export default defineComponent({
        props: {
            category: String,
            totalRating: Number
        },
        setup(props) {
            const roundedNumber = ref<number>(Math.round(props.totalRating!));
            return {
                roundedNumber
            }
        }
    })
</script>