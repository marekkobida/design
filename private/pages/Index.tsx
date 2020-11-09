/*
 * Copyright 2020 Marek Kobida
 */

import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

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
