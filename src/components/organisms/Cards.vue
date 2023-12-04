<template>
    <div class="card_container">
        <div class="data_ready" v-if="loaders">
            <div v-if="data?.category == 'men\'s clothing' || data?.category == 'women\'s clothing'"  class="card_wrapper_available">
                <div class="card_image">
                    <img v-bind:src="data?.image" alt="" width="301" height="383">
                </div>
                <div class="card_content">
                    <div>
                        <p class="card_title">{{ data?.title }}</p>
                        <div class="card_category_rate">
                            <p>{{ data?.category }}</p>
                            <Rate v-bind:total-rating="data?.rating.rate" :category="data?.category" />
                        </div>
                        <div class="card_desc">
                            <p>{{ data?.description }}</p>
                        </div>
                        <div class="card_user_navigation">
                            <ButtonBuy :category="data?.category"/>
                            <ButtonNext :category="data?.category"/>
                        </div>
                    </div>
                </div>   
            </div>
            <div v-else class="card_wrapper_unavailable">
                <div>
                    <p>This Product Unavailable to Show</p>
                    <ButtonNext/>
                </div>
            </div>                  
        </div> 
        <div class="data_unready" v-else>
            <Loaders/>
        </div>
    </div>
</template>

<script lang="ts">
    import ButtonBuy from '../atoms/ButtonBuy.vue';
    import ButtonNext from '../atoms/ButtonNext.vue';
    import Rate from '../atoms/Rate.vue';
    import { useCounterStore } from '@/stores/counter';
    import axios from 'axios';
    import { computed, ref, watch } from 'vue';
    import Loaders from '../atoms/Loaders.vue';

    export default{
        components: {
            ButtonBuy,
            ButtonNext,
            Rate,
            Loaders
        },
        setup() {
            const state = useCounterStore()
            //loaders
            let loaders = ref<boolean>(false);

            // --- Get Data from API ---
            type dataType = {
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

            let data = ref<dataType>();
            const currentIndex = computed(() => {
                return state.page
            })

            const fetchData = (idProduct: number) => {
                axios.get(`https://fakestoreapi.com/products/${idProduct+1}`)
                .then(response => {
                    data.value = response.data
                    loaders.value = true;
                    state.current_product_category = response.data.category
                    console.log('a')
                }).catch(err => {
                    console.log(err)
                })
                loaders.value = false
            }

            //inisiate data
            fetchData(currentIndex.value)
            state.current_product_category = data.value?.category!
            

            //refetch data when index change
            watch(currentIndex, () => {
                fetchData(currentIndex.value)      
            })
            // --- End of Get Data ---
            
            return {
                state,
                data,
                currentIndex,
                loaders
            }
        }
    };
</script>

<style>

.card_wrapper_unavailable {
    background-image: url('../../assets/sad-face.png');
    width: 950px;
    height: 500px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card_wrapper_unavailable > div {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}

.card_container {
    width: 950px;
    height: 500px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    margin-right: 8px;
    padding-top: 44px;
    padding-bottom: 44px;
    padding-left: 24px;
    background-color: white;
}

.card_wrapper_available {
    display: flex;
    column-gap: 36px;
}

.card_content {
    max-width: 548px;
}

.card-image img {
    width: 30px;
    height: 38px;
}

.card_title {
    font-weight: 600;
    font-size: xx-large;
}

.card_category_rate {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--grey-lighten);
    padding-bottom: 12px;
    padding-top: 12px;
}

.card_desc {
    padding-top: 12px;
    height: 224px;
    border-bottom: 2px solid var(--grey-lighten);
}

.card_user_navigation {
    display: flex;
    column-gap: 20px;
    padding-top: 12px;
    margin-top: 20px;
}

</style>