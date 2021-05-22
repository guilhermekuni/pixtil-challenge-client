import api from './api';

const productsService = {
  getProducts: async () => {
    const response = await api.get('products?_page=1');
    return response;
  },
};

export default productsService;
