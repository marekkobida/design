/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function TableSection({
  element: Element,
  ...parameters
}: Test<'tbody'> & { element: 'tbody' | 'tfoot' | 'thead' }) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <Element {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default TableSection;
