import * as React from 'react';
import { Container } from 'reactstrap';

const PageLayout = (props: React.PropsWithChildren<{}>) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container className='d-flex flex-column min-vh-100'>
        <main className='flex-fill'>{props.children}</main>
        <footer className='footer text-center pt-2'>
          <span className='text-muted'>© {currentYear}</span>
        </footer>
      </Container>
    </>
  );
};

export default PageLayout;
