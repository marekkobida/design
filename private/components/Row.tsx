import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Row extends React.Component<React.ComponentPropsWithRef<'div'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={[ 'row', className, ]} />;
  }
}

export default Row;
