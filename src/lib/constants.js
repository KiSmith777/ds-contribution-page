import WalletConnect from "@walletconnect/web3-provider";
import PresaleContract from './PresaleContract_abi.json';
export const contractAddress = '0x1ab5452C3E449f95240d4FA4C3623AcF4D57219c';

export const presaleAbi = PresaleContract.abi;

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      rpc: {  // required
        56: "https://bsc-dataseed.binance.org",
      },
      network: "binance"
    },
  },
};

export const networkParams = {
    "0x38": {
      chainId: "0x38",
      rpcUrls: ["https://bsc-dataseed.binance.org"],
      chainName: "Binance Smart Chain",
      nativeCurrency: { name: "BSC", decimals: 18, symbol: "BNB" },
      blockExplorerUrls: ["https://bscscan.com"],
      iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"]
    }
  };
  
