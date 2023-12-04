import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';
import { ThemeProvider } from '@/components/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
         </ThemeProvider>
      </Provider>
   </React.StrictMode>,
);
