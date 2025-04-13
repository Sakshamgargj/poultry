import { useState, useEffect } from 'react';
import axios from 'axios';

export const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + 'product/all'
        );

        if (response.status === 200) {
          // console.log("object",response.data)
          setProduct(response.data.data);
        } else {
          console.warn('Unexpected response status:', response.status);
          setProduct([]);
        }
      } catch (error) {
        console.error('Product fetch error:', error);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return { product, loading };
};
