import * as React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const StyledContainerDiv = styled.div`
  @media (min-width: 1200px) {
    .container {
      max-width: 840px !important;
    }
  }
`;

const StyledFooter = styled.footer`
  height: 3rem;
  border-top: solid 0.1rem;
  border-top-color: rgba(0, 0, 0, 0.125);
`;

const PageLayout = (props: React.PropsWithChildren<{}>) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <StyledContainerDiv>
        <Container className='d-flex flex-column min-vh-100'>
          <main className='flex-fill'>{props.children}</main>
          <StyledFooter className='footer text-center pt-2'>
            <span className='text-muted'>© {currentYear}</span>
          </StyledFooter>
        </Container>
      </StyledContainerDiv>
    </>
  );
};

export default PageLayout;
