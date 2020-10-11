/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { Test, } from '../helpers/common.types';

import Div from './html/Div';

function Container ({ className, mX = 'auto', pX = 4, ...parameters }: Test<'div'>) {
  const $ = { mX, pX, ...parameters, };

  return <Div {...$} className={[ 'container', className, ]} />;
}

export default Container;
