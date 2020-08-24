/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

import Input from './Input';

class Select extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'select'>, keyof CommonParameters>> {
  static defaultProps = Input.defaultProps;

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <select {...notCommonParameters} className={decodeClassName('border-radius', className)} />;
  }
}

export default Select;
