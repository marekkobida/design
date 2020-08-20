/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

class Row extends React.Component<Div['props']> {
  static defaultProps = { display: 'flex', flexWrap: 'wrap', mX: '!2', };

  render () {
    return <Div {...this.props} />;
  }
}

export default Row;
