/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../helpers/common.types';

import Div from './html/Div';

function Row ({ display = 'flex', flexWrap = 'wrap', mX = '!2', ...parameters }: Test<'div'>) {
  const $ = { display, flexWrap, mX, ...parameters, };

  return <Div {...$} />;
}

export default Row;
