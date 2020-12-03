/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

export default React.forwardRef<
  HTMLFormElement,
  ComponentParametersWithCommonParameters<'form'>
>(function Form(parameters, reference) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <form
      {...notCommonParameters}
      className={decodeClassName(className)}
      ref={reference}
    />
  );
});
