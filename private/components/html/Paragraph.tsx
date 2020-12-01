/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Paragraph({
  mY = 0,
  ...parameters
}: ComponentParametersWithCommonParameters<'p'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    mY,
    ...parameters,
  });

  return <p {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Paragraph;
