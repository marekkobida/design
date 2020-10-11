/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Paragraph ({ mY = 0, ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'p'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ mY, ...parameters, });

  return <p {...commonParameters} className={decodeClassName(className)} />;
}

export default Paragraph;
