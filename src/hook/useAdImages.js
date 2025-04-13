import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAdImages = () => {
  const [adImages, setAdImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("AdImages from context:", adImages);

  useEffect(() => {
    const fetchAdImages = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + 'updateimage/show'
        );

        if (response.status === 200) {
          // console.log("Categories fetched:", response.data.categories);
          setAdImages(response.data.updateImage);
        } else {
          console.warn('Unexpected response status:', response.status);
          setAdImages([]);
        }
      } catch (error) {
        console.error('AdImages fetch error:', error);
        setAdImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdImages();
  }, []);

  return { adImages, loading };
};
