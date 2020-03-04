import Page from '@redred/pages/private/Page';
import React from 'react';

class Test extends Page {
  constructor () {
    super({ isProduction: false, isTest: false, }, -1, 'Test');
  }

  element () {
    return <>{this.name}</>;
  }
}

export default Test;
