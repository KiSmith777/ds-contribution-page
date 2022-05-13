import React, { useContext } from "react";
import {
  HeadingWrapper,
  Heading,
  SubHeading,
  SwapBox,
  SwapPageTitles,
  SwapBodyWrapper,
  SwapFieldWrapper,
  SwapInputContainer,
  SwapInputWrapper,
  SwapInput,
  SwapInputPlaceholder,
  SwapFromWrapper,
  SwapFrom,
  SwapFromText,
  SwapButtonWrapper,
  SwapButton,
  SwapBodyHeading,
  SwapBodyHeadingWrapper,
  ContributionWrapper,
  HeadingContainer,
} from "./ContributionFormElements.js";
import { truncateAddress } from "../../utils";
import { EthersContext } from "../../context/EthersContext";

const Copy = ({ children }) => {
  const {
    contractBalance,
    userContribution,
    account,
    userBalance,
    getInputValue,
    connect,
    connected,
    depositHandler,
    onFocusHandler,
  } = useContext(EthersContext)


  return (
    <>
      <HeadingContainer>
        <HeadingWrapper>
          <Heading>Tokenless Fundraising</Heading>
          <SubHeading>Contribute BNB to Become a First Skeptic!</SubHeading>
        </HeadingWrapper>
      </HeadingContainer>
      <ContributionWrapper>
        <SwapBox style={{height: '620px'}}>
          <SwapPageTitles>
            <SwapBodyHeadingWrapper>
              <SwapBodyHeading>Total Contributions</SwapBodyHeading>
              <SubHeading style = {{margin: '80ox'}}>{contractBalance} / 250 BNB</SubHeading>
            </SwapBodyHeadingWrapper>
            {children}
            <SwapBodyHeadingWrapper>
              <SwapBodyHeading style={{marginTop: '16px'}}>Your Contributions</SwapBodyHeading>
              <SubHeading style={{marginBottom: '16px'}}>{userContribution} BNB</SubHeading>
            </SwapBodyHeadingWrapper>
            <SwapBodyHeadingWrapper style={{margin: '64px 0'}}className="userInfo">
              <SubHeading style={{marginTop: '32px'}}>
                Connected Wallet: {truncateAddress(account)}
              </SubHeading>
              <SubHeading>Balance: {userBalance} BNB</SubHeading>
              <SubHeading style={{justifyContent: 'left', flexDirection:'row'}}>Min: 0.50 BNB</SubHeading>
              <SubHeading style={{justifyContent: 'left'}}>Max: No Max</SubHeading>
            </SwapBodyHeadingWrapper>
          </SwapPageTitles>
          <SwapBodyWrapper>
            <SwapFieldWrapper>
              <SwapInputContainer>
                <SwapInputWrapper className="input">
                  <SwapFromWrapper>
                    <SwapFrom>
                      <SwapFromText>Amount BNB</SwapFromText>
                    </SwapFrom>
                  </SwapFromWrapper>
                  <SwapInput>
                    <SwapInputPlaceholder
                      onChange={getInputValue}
                      onFocus={onFocusHandler}
                      type="number"
                      inputmode="decimal"
                      title="Token Amount"
                      id="depositBNB"
                      autocomplete="off"
                      autocorrect="off"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      placeholder="Min: 0.5"
                      minlength="1"
                      maxlength="79"
                      spellcheck="false"
                    />
                  </SwapInput>
                </SwapInputWrapper>
              </SwapInputContainer>
              <SwapButtonWrapper>
                {!connected ? <SwapButton connected={connected} onClick={connect}>Connect Wallet</SwapButton> : <SwapButton connected={connected} onClick={depositHandler}>Send BNB</SwapButton>}

              </SwapButtonWrapper>
            </SwapFieldWrapper>
          </SwapBodyWrapper>
        </SwapBox>
      </ContributionWrapper>
    </>
  );
};

export default Copy;
