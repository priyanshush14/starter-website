import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PresetProvider } from '../context/PresetContext';
import { AppRouter } from './router';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <PresetProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AppRouter />
        </BrowserRouter>
      </PresetProvider>
    </React.StrictMode>
  );
};
