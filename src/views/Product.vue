<template>
    <div class="container">
        <div :class="currentData?.category == 'men\'s clothing' ? 'bg-men' : 'bg-women'"/>
        <div class="content">
            <img v-bind:src="currentData?.image" v-bind:alt="currentData?.title" >
            <div class="content_detail">
                <h1 :class="currentData?.category == 'men\'s clothing' ? 'men_color_price' : 'women_color_price'">{{ currentData?.title }}</h1>
                <div class="content_score">
                    <p>{{ currentData?.category }}</p>
                    <Rate :category="currentData?.category" :total-rating="currentData?.rating.rate"/>
                </div>
                <p class="content_desc">{{ currentData?.description }}</p>
                <p :class="currentData?.category == 'men\'s clothing' ? 'men_color_price' : 'women_color_price'">${{ currentData?.price }}</p>
                <div class="user_navigate">
                    <ButtonBuy :category="currentData?.category"></ButtonBuy>
                    <Button :category="currentData?.category"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { useCounterStore } from '@/stores/counter';
    import { onMounted, watch, ref } from 'vue';
    import axios from 'axios';
    import Rate from '../components/atoms/Rate.vue';
    import ButtonBuy from '@/components/atoms/ButtonBuy.vue';
    import Button from '@/components/atoms/Button.vue';

    export default {
        components: {
            Rate,
            ButtonBuy,
            Button
        },
        setup() {
            const globalState = useCounterStore()
            
            type data = {
                id: number,
                title: string,
                price: number,
                description: string,
                category: string,
                image: string,
                rating: {
                    rate: number,
                    count: number
                }
            }

            const currentData = ref<data>();

            watch(() => globalState.page, () => {
                location.reload()
            })

            onMounted(() => {
                axios.get("https://fakestoreapi.com/products?limit=10")
                .then(res => {
                    const getData = res.data
                    currentData.value = getData[globalState.page]
                })
                .catch(err => console.log(err))
            })
            
            return {
                currentData
            }
        },
    };
</script>

<style>
    
    .container {
        height: 100vh;
        display: flex;
    }
    .bg-men, .bg-women {
        height: 70%;
        width: 100%;
    }
    .bg-men {
        background-color: var(--baby-blue);
    }
    .bg-women {
        background-color: var(--pink);
    }
    .content {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 36px 24px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .content > img {
        width: 301px;
        height: 350px;
    }
    .content_detail {
        max-width: 548px;
        padding: 8px 32px;
    }

    .content_desc {
        height: 200px;
        border-bottom:  2px solid var(--grey-lighten);
        margin-bottom: 12px;
    }

    .content_score {
        display: flex;
        justify-content: space-between;
        height: 20px;
        padding: 10px 5px;
        border-bottom: 2px solid var(--grey-lighten);
        margin-bottom: 12px;
    }

    .men_color_price, .women-color_price {
        font-size: 24px;
        font-weight: 700;
    }

    .men_color_price {
        color: var(--blue);
    }

    .women-color_price {
        color: var(--pink);
    }
    .user_navigate {
        display: flex;
        column-gap: 12px;
        margin-top: 12px;
    }

</style>