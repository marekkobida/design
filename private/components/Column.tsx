import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Column extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>> {
  static defaultProps = { pX: 2, }

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Column;
