import React from 'react';

import DesignComponent from './DesignComponent';

class Button extends DesignComponent<React.ComponentPropsWithoutRef<'button'>> {
  static defaultProps: Button['props'] = { pX: 4, pY: 3, };

  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <button {...notCommonParameters} className={className} />;
  }
}

export default Button;
