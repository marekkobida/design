import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class Button extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CommonParameters>> {
  static defaultProps = { display: 'inline-block', pX: 4, pY: 2, };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <button {...notCommonParameters} className={decodeClassName('border-radius', className)} />;
  }
}

export default Button;
