/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Span (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'span'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <span {...commonParameters} className={decodeClassName(className)} />;
}

export default Span;
