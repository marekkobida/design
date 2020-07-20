import React from 'react';

import DesignComponent from './DesignComponent';

class Label extends DesignComponent<JSX.IntrinsicElements['label']> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <label {...notCommonParameters} className={className} />;
  }
}

export default Label;
