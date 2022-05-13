import styled from "styled-components";

export const ContributionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`
export const HeadingWrapper = styled.div`
  position: relative;
  max-width: 430px;
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
 
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const Heading = styled.h1`
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
  color: #e7dfdd;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const SubHeading = styled.h2`
  box-sizing: border-box;
  margin: 8px;
  min-width: 0px;
  font-size: 16px;
  font-weight: 700;
  color: #e7dfdd;
  display: flex;
  justify-content: center;
`;

export const SwapBox = styled.div`
  max-width: 420px;
  width: 100%;
  background: rgba(0, 0, 0, 0.84) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px;
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  height: 500px;
  flex-direction: column;
  margin-top: 16px;
  

  @media screen and (max-width: 600px) {
    margin-top: 16px;
    transform: scale(0.9);
    
  }
`;

export const SwapPageTitles = styled.section`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  max-width: 420px;
  margin-right: auto;
  margin-left: auto;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`;

export const SwapBodyHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  margin: 8px auto auto auto;

  &.userInfo {
    align-items: flex-start;
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;

export const SwapBodyHeading = styled.div`
  outline: currentcolor none medium;
  cursor: auto;
  opacity: 1;
  text-decoration: none;
  color: #e7dfdd;
  font-size: 24px;
  display: inherit;
  justify-content: center;
  flex-direction: column;

  &.active {
    opacity: 1;
    border-radius: 12px;
    font-weight: 500;
    color: rgb(17, 153, 250);
  }
`;

export const SwapBodyWrapper = styled.div`
  position: relative;
`;

export const SwapFieldWrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
  margin-top: 16px;
`;

export const SwapInputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: rgb(247, 248, 250);
  z-index: 1;
}
`;
export const SwapInputWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(247, 248, 250);
  background-color: rgb(255, 255, 255);

  &.input {
    margin-bottom: 8px;
  }
  &.output {
    margin-top: 8px;
  }
`;

export const SwapInput = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
`;

export const SwapInputPlaceholder = styled.input`
  color: rgba(11, 20, 38, 0.5);
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: currentcolor none medium;
  border: medium none;
  flex: 1 1 auto;
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
`;

export const SwapFromWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: rgba(11, 20, 38, 0.5);
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0px;
`;
export const SwapFrom = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
`;

export const SwapFromText = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 14px;
  color: rgb(86, 90, 105);
`;

export const SwapConnectWrapper = styled.div`
  margin-top: 1rem;
`;

export const SwapButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export const SwapButton = styled.button`
  padding: 18px;
  width: 100%;
  text-align: center;
  outline: currentcolor none medium;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  opacity: ${({ connected }) => (connected ? "1.0" : "0.5")};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px;
  background-color: #0C70F2;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
`;
