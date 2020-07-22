import React from 'react';

import DesignComponent from './DesignComponent';

class Button extends DesignComponent<React.ComponentPropsWithoutRef<'button'>> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <button {...notCommonParameters} className={className} />;
  }
}

export default Button;
