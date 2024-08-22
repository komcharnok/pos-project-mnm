import create from 'zustand';
import axios from 'axios';

const useProduct = create((set) => ({
    products: [],
    err: null, 

    fetchDataProduct: async () => {
        try {
            const rs = await axios.get(`http://localhost:8000/product`);
            set({ products: rs.data, err: null }); 
        } catch (err) {
            set({ err: err.message }); 
        }
    },
}));

export default useProduct;
