import api from './api';
import { convertParamsToQueryString } from './helper';

const productsService = {
  getProducts: async (params) => {
    const queryString = convertParamsToQueryString(params);
    const response = await api.get(`products?${queryString}`);

    return response;
  },
};

export default productsService;
