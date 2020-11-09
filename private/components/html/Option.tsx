/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Option(parameters: Test<'option'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters,
  );

  return (
    <option {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Option;
