/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLTableSectionElement,
  ComponentParametersWithCommonParameters<'tbody'> & {
    element: 'tbody' | 'tfoot' | 'thead';
  }
>(function TableSection({ element: E, ...parameters }, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <E
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
