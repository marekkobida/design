import React from 'react';

import DesignComponent from './DesignComponent';

class Input extends DesignComponent<React.ComponentPropsWithoutRef<'input'>> {
  static defaultProps: Input['props'] = { pX: 4, pY: 3, };

  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <input {...notCommonParameters} className={className} />;
  }
}

export default Input;
