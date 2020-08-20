/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class Input extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'input'>, keyof CommonParameters>> {
  static defaultProps = { display: 'block', pX: 4, pY: 2, width: '100', };

  render () {
    const { ...commonParameters } = this.props;

    if (commonParameters.type === 'button' || commonParameters.type === 'reset' || commonParameters.type === 'submit') {
      commonParameters.display = 'inline-block';

      delete commonParameters.width;
    }

    if (commonParameters.type === 'checkbox' || commonParameters.type === 'radio') {
      commonParameters.pX = 2;

      delete commonParameters.width;
    }

    const { className, ...notCommonParameters } = decodeCommonParameters(commonParameters);

    return <input {...notCommonParameters} className={decodeClassName('border-radius', className)} />;
  }
}

export default Input;
