import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Span extends React.Component<React.ComponentPropsWithRef<'span'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <span {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Span;
