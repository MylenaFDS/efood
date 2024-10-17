// src/services/api.ts
import axios from 'axios';
import RestaurantModel from '../modals/RestaurantModal';

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes';

export const fetchRestaurants = async (): Promise<RestaurantModel[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Ajuste isso de acordo com a estrutura da sua API
    } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
        throw error; // Opcional: você pode lançar o erro para que seja tratado onde a função é chamada
    }
};
