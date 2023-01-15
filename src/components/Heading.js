import React from 'react';

import * as styles from './Heading.module.css';

const Heading = (props) => {
  switch (props.size) {
    case 1:
      return <h1 className={`${props.className} ${styles['heading']}`}>{props.children}</h1>;
    case 2:
      return <h2 className={`${props.className} ${styles['heading']}`}>{props.children}</h2>;
    case 3:
      return <h3 className={`${props.className} ${styles['heading']}`}>{props.children}</h3>;
    case 4:
      return <h4 className={`${props.className} ${styles['heading']}`}>{props.children}</h4>;
    case 5:
      return <h5 className={`${props.className} ${styles['heading']}`}>{props.children}</h5>;
    case 6:
      return <h6 className={`${props.className} ${styles['heading']}`}>{props.children}</h6>;
    default:
      return <h1 className={`${props.className} ${styles['heading']}`}>{props.children}</h1>;
  }
};

export default Heading;
