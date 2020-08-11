import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class TextArea extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof CommonParameters>> {
  static defaultProps = { pX: 4, pY: 2, width: '100', };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <textarea {...notCommonParameters} className={decodeClassName('border-radius textarea', className)} />;
  }
}

export default TextArea;
