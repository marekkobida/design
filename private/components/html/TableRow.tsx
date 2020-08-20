/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class TableRow extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'tr'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <tr {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default TableRow;
