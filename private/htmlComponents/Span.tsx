import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Span extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'span'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <span {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Span;
