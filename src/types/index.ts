export interface StableCoin {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  targetCurrency: string;
  totalSupply: number;
  creator: string;
  apy: number;
  createdAt: Date;
}

export interface CreateStableCoinForm {
  name: string;
  symbol: string;
  icon: string;
  targetCurrency: string;
  initialSupply: number;
}

export interface WalletBalance {
  token: string;
  amount: number;
  value: number;
}