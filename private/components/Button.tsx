import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Button extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <button {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Button;
