import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Row extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>> {
  static defaultProps = { display: 'flex', flexWrap: 'wrap', mX: '!2', };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Row;
