import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Category from context:", category);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + 'category/show'
        );

        if (response.status === 200) {
          // console.log("Categories fetched:", response.data.categories);
          setCategory(response.data.categories);
        } else {
          console.warn('Unexpected response status:', response.status);
          setCategory([]);
        }
      } catch (error) {
        console.error('Category fetch error:', error);
        setCategory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  return { category, loading };
};
