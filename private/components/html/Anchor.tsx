/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Anchor(parameters: ComponentParametersWithCommonParameters<'a'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <a {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Anchor;
