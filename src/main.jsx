import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux';
import { appReducer } from './reducer.js';
import { createStore } from 'redux';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

let mystore = createStore(appReducer);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <BrowserRouter>
        <CookiesProvider>
          <AuthProvider>
            <DataProvider>
              <App />
            </DataProvider>
          </AuthProvider>
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
