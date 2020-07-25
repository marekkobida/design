import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Button extends React.Component<React.ComponentPropsWithRef<'button'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <button {...notCommonParameters} className={className} />;
  }
}

export default Button;
