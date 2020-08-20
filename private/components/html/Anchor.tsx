/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

class Anchor extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'a'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <a {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Anchor;
