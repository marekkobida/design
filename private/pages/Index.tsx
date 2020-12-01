import React from 'react';

import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';

class Index extends Page {
  constructor() {
    super('index.html', -1);
  }

  element() {
    return <>{this.fileName}</>;
  }

  template = template();
}

export default Index;
