import { createContext, useState, useEffect } from 'react';
import { presaleAbi, contractAddress, providerOptions, networkParams } from '../lib/constants';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { toDecimal, parseInput, toHex } from "../utils";

export const EthersContext = createContext();

export const EthersProvider = ({ children }) => {
    const [provider, setProvider] = useState();
    const [account, setAccount] = useState();
    const [signer, setSigner] = useState("");
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [userInput, setUserInput] = useState();
    const [contract, setContract] = useState();
    const [connected, setConnected] = useState(false);
    const [userBalance, setUserBalance] = useState("0.00");
    const [contractBalance, setContractBalance] = useState("0.00");
    const [userContribution, setUserContribution] = useState("0.00");
    const [library, setLibrary] = useState();
    const [correctNetwork, setCorrectNetwork] = useState(false);

    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions // required
    });

    const [cached, setCached] = useState(web3Modal.cachedProvider);

    const connectWallet = async () => {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider, 'any');
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();
        setContractBalance()
        setProvider(provider);
        setLibrary(library);
        if (accounts) setAccount(accounts[0]);
        setConnected(true);
        const signer = library.getSigner(accounts[0]);
        setSigner(signer);
        setChainId(network.chainId);
    };

    const [connect] = useState(() => () => connectWallet());

    const refreshState = () => {
        setConnected(false);
        setAccount();
        setLibrary();
        setProvider();
        setSigner();
        setChainId();
        setUserBalance("0.00");
        setUserContribution("0.00");
        setCached();
        setCorrectNetwork(false);
    };
    const disconnectWallet = () => {
        setCached(web3Modal.clearCachedProvider());
        refreshState();
    }

    const ifCached = () => {
        if (cached) {
            connectWallet();
        };
    };

    /* useEffect(() => {
        if (connected && !correctNetwork) {
            const switchNetwork = async () => {
                try {
                    await library.provider.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: '0x38' }]
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await library.provider.request({
                                method: "wallet_addEthereumChain",
                                params: [networkParams['0x38']]
                            });
                        } catch (error) {
                            setError(error);
                        };
                    }
                }
            }
            const networkInterval = setInterval( async () => {
                try {
                    await switchNetwork();
                } catch (error) {
                    console.log(error)
                }
            }, 350);
            return () => clearInterval(networkInterval);
        }
    }); */

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = async (accounts) => {
                console.log("accountsChanged", accounts);
                if (accounts) setAccount(accounts[0]);
                alert(`Account switched to ${accounts[0]}`);
            };
            provider.on("accountsChanged", handleAccountsChanged);
            return () => {
                if (provider.removeListener) {
                    provider.removeListener("accountsChanged", handleAccountsChanged);
                };
            };
        };
    }, [provider, chainId, error]);

    const getInputValue = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setUserInput(parseInput(value));
    };

    const depositHandler = async () => {
        if (toDecimal(userInput) < 0.5) {
            alert('The minimum contribution is 0.5 BNB.');
        } else if (toDecimal(userInput) > 250) {
            alert('We truly do appreciate the kind offer. \n\n Unfortunately, this amount is over the hard cap.');
        } else if (toDecimal(userInput) > (250 - contractBalance)) {
            alert(`This contribution is too large. \n\n Currently the remaining amount that can be contributed is ${250 - contractBalance} BNB.`);
        } else if (toHex(chainId) !== '0x38') {
            alert('You are connected to the wrong chain. Please ensure you are on the BSC Network.');
        }
        else {
            try {
                await contract.depositBNB({
                    value: userInput
                })
            } catch (depositError) {
                if (depositError.code === -32603) {
                    alert('Insufficient funds for transfer.');
                }
            }
        }
    }

    useEffect(() => {
        if (connected) {
            const updateBalances = async () => {
                try {
                    const balance = await library.getBalance(account);
                    setUserBalance(toDecimal(balance));
                    const contract = new ethers.Contract(
                        contractAddress,
                        presaleAbi,
                        signer
                    );
                    setContract(contract);
                    const contributions = await contract.howMuchSent(account);
                    setUserContribution(toDecimal(contributions));
                    const totalContributions = await library.getBalance(contractAddress);
                    setContractBalance(toDecimal(totalContributions))
                } catch (error) {
                    console.log(error);
                }
            }
            const interval = setInterval(() => {
                updateBalances();
            }, 300);
            return () => clearInterval(interval);
        } else if (connected && toHex(chainId !== '0x61')) {
            console.log('You are connected to the wrong network. Please switch to BSC.')
        }
    
    });

    console.log(contractBalance);
    const progress = contractBalance / 2.5

    const onFocusHandler = () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = -80;
    }

    return (
        <EthersContext.Provider
            value={{
                contractBalance,
                userContribution,
                account,
                userBalance,
                getInputValue,
                connect,
                disconnectWallet,
                connected,
                depositHandler,
                progress,
                ifCached,
                correctNetwork,
                onFocusHandler
            }}
        >
            {children}
        </EthersContext.Provider>
    );
};
