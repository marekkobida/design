/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Anchor(parameters: Test<'a'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters,
  );

  return <a {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Anchor;
