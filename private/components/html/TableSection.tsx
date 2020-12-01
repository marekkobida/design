/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

interface P extends ComponentParametersWithCommonParameters<'tbody'> {
  element: 'tbody' | 'tfoot' | 'thead';
}

function TableSection({ element: E, ...parameters }: P) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return <E {...notCommonParameters} className={decodeClassName(className)} />;
}

export default TableSection;
