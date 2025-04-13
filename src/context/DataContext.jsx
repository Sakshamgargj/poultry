import { createContext, useContext } from 'react';
import { useCategory } from '../hook/useCategory';
import { useSubCategory } from '../hook/useSubCategory';
import { useProduct } from '../hook/useProduct';
import { useAdImages } from '../hook/useAdImages';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const category = useCategory();
  const subcategory = useSubCategory();
  const product = useProduct();
  const adImages = useAdImages();

  return (
    <DataContext.Provider value={{ category, subcategory, product, adImages }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);