/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Form(parameters: Test<'form'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters(
    parameters,
  );

  return (
    <form {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Form;
