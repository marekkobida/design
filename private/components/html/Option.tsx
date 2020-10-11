/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Option (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'option'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <option {...commonParameters} className={decodeClassName(className)} />;
}

export default Option;
