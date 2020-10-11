/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Label ({ display = 'inline-block', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'label'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters({ display, ...parameters, });

  return <label {...commonParameters} className={decodeClassName(className)} />;
}

export default Label;
