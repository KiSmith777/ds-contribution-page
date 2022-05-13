import React, { useContext } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogoContainer,
    NavLogo,
    NavLogoText,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import Logo from '../../assets/logo.svg';
import { EthersContext } from '../../context/EthersContext';

const Navbar = () => {

    const {
        ifCached,
        connected,
        connect,
        disconnectWallet
    } = useContext(EthersContext);

    return (
        <>
            <Nav onLoad={ifCached}>
                <NavbarContainer>
                    <NavLogoContainer>
                        <NavLogo src={Logo} alt="logo" to="/" />
                        <NavLogoText to="/">DeFi Skeptic</NavLogoText>
                    </NavLogoContainer>
                    
                    <NavBtn>
                        {!connected ? (
                            <NavBtnLink onClick={connect}>Connect Wallet</NavBtnLink>
                        ) : (
                            <NavBtnLink onClick={disconnectWallet}>Disconnect</NavBtnLink>
                        )}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;