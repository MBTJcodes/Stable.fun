import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreateCoin from './pages/CreateCoin';
import CoinDetails from './pages/CoinDetails';
import Layout from './components/Layout';
import { WalletProvider } from './context/WalletContext';

function App() {
  return (
    <WalletProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/create" element={<CreateCoin />} />
          <Route path="/app/coin/:id" element={<CoinDetails />} />
        </Route>
      </Routes>
    </WalletProvider>
  );
}

export default App;
