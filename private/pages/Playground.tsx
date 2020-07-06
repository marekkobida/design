import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Column from '../components/Column';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Row from '../components/Row';
import Text from '../components/Text';

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Row>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
        </Row>
        <Heading size={1}>Heading</Heading>
        <Heading size={2}>Heading</Heading>
        <Heading size={3}>Heading</Heading>
        <Heading size={4}>Heading</Heading>
        <Heading size={5}>Heading</Heading>
        <Heading size={6}>Heading</Heading>
        <Link to="#">Link</Link>
        <Text>Text</Text>
      </Container>
    );
  }

  template = template();
}

export default Playground;
