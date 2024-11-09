import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CreateCoin from './pages/CreateCoin';
import CoinDetails from './pages/CoinDetails';
import Layout from './components/Layout';
import { WalletProvider } from './context/WalletContext';

function App() {
  // Check if we're on the landing page
  const isLandingPage = window.location.pathname === '/';

  return (
    <WalletProvider>
      {isLandingPage ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/app" element={<Dashboard />} />
            <Route path="/app/create" element={<CreateCoin />} />
            <Route path="/app/coin/:id" element={<CoinDetails />} />
          </Routes>
        </Layout>
      )}
    </WalletProvider>
  );
}