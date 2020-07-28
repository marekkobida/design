import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Select extends React.Component<React.ComponentPropsWithoutRef<'select'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <select {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Select;
