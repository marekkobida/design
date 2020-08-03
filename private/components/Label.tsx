import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Label extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'label'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <label {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Label;
