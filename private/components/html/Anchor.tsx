/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Anchor (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'a'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <a {...commonParameters} className={decodeClassName(className)} />;
}

export default Anchor;
