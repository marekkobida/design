/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Form(parameters: ComponentParametersWithCommonParameters<'form'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters
  );

  return (
    <form {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Form;
