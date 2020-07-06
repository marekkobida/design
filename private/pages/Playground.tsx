import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Text from '../components/Text';

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Heading size={1}>{this.name}</Heading>
        <Heading size={2}>{this.name}</Heading>
        <Heading size={3}>{this.name}</Heading>
        <Heading size={4}>{this.name}</Heading>
        <Heading size={5}>{this.name}</Heading>
        <Heading size={6}>{this.name}</Heading>
        <Link to="#">{this.name}</Link>
        <Text>{this.name}</Text>
      </Container>
    );
  }

  template = template();
}

export default Playground;
