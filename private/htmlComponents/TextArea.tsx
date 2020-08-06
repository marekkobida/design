import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class TextArea extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <textarea {...notCommonParameters} className={decodeClassName([ 'textarea', className, ])} />;
  }
}

export default TextArea;
