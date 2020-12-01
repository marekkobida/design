/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Span(parameters: ComponentParametersWithCommonParameters<'span'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <span {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Span;
