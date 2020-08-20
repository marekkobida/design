/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class Option extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'option'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <option {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Option;
