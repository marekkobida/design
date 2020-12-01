/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Label({
  display = 'inline-block',
  ...parameters
}: ComponentParametersWithCommonParameters<'label'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    display,
    ...parameters,
  });

  return (
    <label {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Label;
