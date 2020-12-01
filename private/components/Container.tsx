/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

import { ComponentParametersWithCommonParameters } from '../helpers/common.types';

function Container({
  className,
  mX = 'auto',
  pX = 4,
  ...parameters
}: ComponentParametersWithCommonParameters<'div'>) {
  return (
    <Div {...parameters} className={['container', className]} mX={mX} pX={pX} />
  );
}

export default Container;
