/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Div (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <div {...commonParameters} className={decodeClassName(className)} />;
}

export default Div;
