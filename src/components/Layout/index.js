import React from 'react'
import {
  InfoContainer,
  InfoWrapper
} from './LayoutElements';

const Layout = ({children, id}) => {
  
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        {children}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Layout;