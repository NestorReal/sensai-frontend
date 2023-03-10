import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import { mainTheme } from './mocks/themes';

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </ThemeProvider>
);

export default App;
