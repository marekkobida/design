/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Select ({ display = 'block', pX = 4, pY = 2, width = '100', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'select'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ display, pX, pY, width, ...parameters, });

  return <select {...commonParameters} className={decodeClassName('border-radius', className)} />;
}

export default Select;
