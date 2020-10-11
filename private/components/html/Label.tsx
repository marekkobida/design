/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../../helpers/common.types';
import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';

function Label ({ display = 'inline-block', ...parameters }: Test<'label'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({ display, ...parameters, });

  return <label {...notCommonParameters} className={decodeClassName(className)} />;
}

export default Label;
