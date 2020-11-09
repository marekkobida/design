/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test } from '../helpers/common.types';

import Div from './html/Div';

function Column({
  flex = 'none',
  pX = 2,
  width = 'auto',
  ...parameters
}: Test<'div'>) {
  const $ = { flex, pX, width, ...parameters };

  return <Div {...$} />;
}

export default Column;
