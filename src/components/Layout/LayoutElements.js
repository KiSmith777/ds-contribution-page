import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #0B438C;
  height: 1020px;
  width: 100vw;
  position: absolute;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  overflow: visible;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 600px) {
    justify-content: left;
  }
`;
