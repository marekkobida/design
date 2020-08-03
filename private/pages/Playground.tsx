import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return <>{this.name}</>;
  }

  template = template();
}

export default Playground;
