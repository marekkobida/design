import Container from '../components/Container';
import Heading from '../components/Heading';
import Page from '@redredsk/pages/private/Page';
import React from 'react';
import template from '@redredsk/pages/private/template';

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Heading size={1}>{this.name}</Heading>
        <Heading size={2}>{this.name}</Heading>
      </Container>
    );
  }

  template = template();
}

export default Playground;
