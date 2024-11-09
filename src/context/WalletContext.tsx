import React, { createContext, useContext, useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

interface WalletContextType {
  wallet: PhantomWalletAdapter | null;
  connected: boolean;
  publicKey: PublicKey | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<PhantomWalletAdapter | null>(null);
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  useEffect(() => {
    const adapter = new PhantomWalletAdapter();
    setWallet(adapter);

    return () => {
      adapter.disconnect();
    };
  }, []);

  const connect = async () => {
    if (!wallet) return;
    try {
      await wallet.connect();
      setConnected(true);
      setPublicKey(wallet.publicKey);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = async () => {
    if (!wallet) return;
    try {
      await wallet.disconnect();
      setConnected(false);
      setPublicKey(null);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <WalletContext.Provider value={{ wallet, connected, publicKey, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);