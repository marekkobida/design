import Container from '../components/Container';
import Page from '@redredsk/pages/private/Page';
import React from 'react';
import css from './Playground.css';
import template from '@redredsk/pages/private/template';

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return <Container>{this.name}</Container>;
  }

  template = template();
}

export default Playground;
