import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Input extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'input'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <input {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Input;
