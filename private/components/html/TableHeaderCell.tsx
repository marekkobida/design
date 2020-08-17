import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class TableHeaderCell extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'th'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <th {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default TableHeaderCell;
