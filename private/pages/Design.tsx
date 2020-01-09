import Page from '@redred/pages/private/Page';
import React from 'react';
import template from '@redred/pages/private/template';

import Column from '../components/Column';
import Container from '../components/Container';
import Row from '../components/Row';

class Design extends Page {
  constructor() {
    super({ isProduction: false, isTest: false }, -1, 'Design');
  }

  element() {
    return (
      <Container>
        <Row>
          <Column>Column</Column>
          <Column>Column</Column>
        </Row>
      </Container>
    );
  }

  template = template;
}

export default Design;
