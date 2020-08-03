import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Div extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Div;
