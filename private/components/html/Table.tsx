/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLTableElement,
  ElementParametersWithCommonParameters<'table'>
>(function Table({ width = '100', ...parameters }, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    width,
    ...parameters,
  });

  return (
    <table
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
