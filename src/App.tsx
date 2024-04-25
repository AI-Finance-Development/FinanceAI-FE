import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/auth-page/auth-page';
import BaseLayout from './layouts/base-layout/base-layout';
import Index from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <BaseLayout>
          <Index />
        </BaseLayout>
      } />
      <Route path='/auth' element={
        <AuthPage />
      } />
    </Routes>
  );
}

export default App;
