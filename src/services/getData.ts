import axios from 'axios';

export const getData = async (idProduct: number) => {
    const data = await axios.get(`https://fakestoreapi.com/products/${idProduct}`)
    return data.data;
}
