/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class Table extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'table'>, keyof CommonParameters>> {
  static defaultProps = { width: '100', };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <table {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Table;
