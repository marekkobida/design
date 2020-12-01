/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Div(parameters: ComponentParametersWithCommonParameters<'div'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <div {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Div;
