/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Form (parameters: CommonParameters & Omit<React.ComponentPropsWithoutRef<'form'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <form {...commonParameters} className={decodeClassName(className)} />;
}

export default Form;
