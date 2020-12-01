/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ComponentParametersWithCommonParameters } from '../helpers/common.types';

function Column({
  flex = 'none',
  pX = 2,
  width = 'auto',
  ...parameters
}: ComponentParametersWithCommonParameters<'div'>) {
  return <Div {...parameters} flex={flex} pX={pX} width={width} />;
}

export default Column;
