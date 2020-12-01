/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters from '../../helpers/decodeCommonParameters';
import { ComponentParametersWithCommonParameters } from '../../helpers/common.types';

function Table({
  width = '100',
  ...parameters
}: ComponentParametersWithCommonParameters<'table'>) {
  const { className, ...notCommonParameters } = decodeCommonParameters({
    width,
    ...parameters,
  });

  return (
    <table {...notCommonParameters} className={decodeClassName(className)} />
  );
}

export default Table;
