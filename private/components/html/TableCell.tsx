/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class TableCell extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'td'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <td {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default TableCell;
