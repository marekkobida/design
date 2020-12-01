/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Span(parameters: Test<'span'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <span {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Span;
