import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Label extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'label'>, keyof CommonParameters>> {
  static defaultProps = { display: 'inline-block', };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <label {...notCommonParameters} className={decodeClassName('label', className)} />;
  }
}

export default Label;
