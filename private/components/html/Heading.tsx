/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ElementParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLHeadingElement,
  ElementParametersWithCommonParameters<'h1'> & {
    headingSize?: '1' | '2' | '3' | '4' | '5' | '6';
  }
>(function Heading({ headingSize = '1', mY = '0', ...parameters }, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    mY,
    ...parameters,
  });

  const H = `h${headingSize}` as 'h1';

  return (
    <H
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
