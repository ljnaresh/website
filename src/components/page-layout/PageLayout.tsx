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

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  const currentYear = new Date().getFullYear();
  const classes = `d-flex flex-column min-vh-100 ${className}`.trim();

  return (
    <StyledContainerDiv>
      <Container className={classes}>
        <main className='flex-fill'>{children}</main>
        <StyledFooter className='footer text-center pt-2'>
          <span className='text-muted'>© {currentYear}</span>
        </StyledFooter>
      </Container>
    </StyledContainerDiv>
  );
};

export default PageLayout;
