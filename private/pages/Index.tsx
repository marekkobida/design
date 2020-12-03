import React from 'react';

import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';

import Anchor from '../components/html/Anchor';
import Container from '../components/Container';

class Index extends Page {
  constructor() {
    super('index.html', -1);
  }

  element() {
    return (
      <Container>
        <Anchor>Anchor</Anchor>
      </Container>
    );
  }

  template = template();
}

export default Index;
