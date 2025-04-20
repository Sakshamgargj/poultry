import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTagline = () => {
  const [tagline, setTagline] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log("Tagline from context:", tagline);

  useEffect(() => {
    const fetchTagline = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + 'tagline/show'
        );

        if (response.status === 200) {
          // console.log("Taglines fetched:", response.data.taglines);
          setTagline(response.data.taglines);
        } else {
          console.warn('Unexpected response status:', response.status);
          setTagline([]);
        }
      } catch (error) {
        console.error('Tagline fetch error:', error);
        setTagline([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTagline();
  }, []);

  return { tagline, loading };
};
