<template>
    <Card/>
</template>

<script lang="ts">
    import { useCounterStore } from '@/stores/counter';
    import { onMounted, watch, ref } from 'vue';
    import axios from 'axios';
    import Rate from '../components/atoms/Rate.vue';
    import ButtonBuy from '@/components/atoms/ButtonBuy.vue';
    import ButtonNext from '@/components/atoms/ButtonNext.vue';
    import Card from '../components/organisms/Cards.vue'

    export default {
        components: {
            Rate,
            ButtonBuy,
            ButtonNext,
            Card
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

</style>