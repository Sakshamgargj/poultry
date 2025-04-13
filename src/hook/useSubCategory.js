import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSubCategory = () => {
  const [subcategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Subcategory from context:", subcategory);

  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + 'subcategory/show'
        );

        if (response.status === 200) {
          // console.log("response.data.subcategory from context:", response.data);

          setSubCategory(response.data.data);
        } else {
          console.warn('Unexpected response status:', response.status);
          setSubCategory([]);
        }
      } catch (error) {
        console.error('SubCategory fetch error:', error);
        setSubCategory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategory();
  }, []);

  return { subcategory, loading };
};
