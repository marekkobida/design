import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Container extends React.Component<React.ComponentPropsWithRef<'div'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={[ 'container', className, ]} />;
  }
}

export default Container;
