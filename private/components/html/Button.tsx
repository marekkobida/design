/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Button ({ display = 'inline-block', pX = 4, pY = 2, ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'button'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ display, pX, pY, ...parameters, });

  return <button {...commonParameters} className={decodeClassName('border-radius', className)} />;
}

export default Button;
