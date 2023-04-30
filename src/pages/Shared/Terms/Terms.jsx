import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container>
      <h1>Terms and condition..</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam, architecto suscipit repellendus voluptate, asperiores quibusdam error perspiciatis ut laborum fugiat nostrum dolores sunt voluptas adipisci perferendis eveniet aliquid quaerat?</p>
      <p>Go Back to <Link to='/register'>Register</Link> </p>
    </Container>
  );
};

export default Terms;