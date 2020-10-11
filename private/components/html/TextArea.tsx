/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function TextArea ({ display = 'block', pX = 4, pY = 2, width = '100', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ display, pX, pY, width, ...parameters, });

  return <textarea {...commonParameters} className={decodeClassName('border-radius', className)} />;
}

export default TextArea;
