import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Label extends React.Component<React.ComponentPropsWithRef<'label'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <label {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Label;
