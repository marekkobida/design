/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Option(parameters: ComponentParametersWithCommonParameters<'option'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <option {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Option;
