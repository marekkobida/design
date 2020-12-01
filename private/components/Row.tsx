/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ComponentParametersWithCommonParameters } from '../helpers/common.types';

function Row({
  display = 'flex',
  flexWrap = 'wrap',
  mX = '!2',
  ...parameters
}: ComponentParametersWithCommonParameters<'div'>) {
  return <Div {...parameters} display={display} flexWrap={flexWrap} mX={mX} />;
}

export default Row;
