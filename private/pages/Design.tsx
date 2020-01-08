import Page from '@redred/pages/private/Page';
import React from 'react';
import template from '@redred/pages/private/template';

class Design extends Page {
  constructor() {
    super({ isProduction: false, isTest: false }, -1, 'Design');
  }

  element() {
    return <>Design</>;
  }

  template = template;
}

export default Design;
