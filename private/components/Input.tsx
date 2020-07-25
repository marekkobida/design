import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Input extends React.Component<React.ComponentPropsWithRef<'input'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <input {...notCommonParameters} className={className} />;
  }
}

export default Input;
