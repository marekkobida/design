/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters, } from '../helpers/decodeCommonParameters';

import Div from './html/Div';

function Row ({ display = 'flex', flexWrap = 'wrap', mX = '!2', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>) {
  const $ = { display, flexWrap, mX, ...parameters, };

  return <Div {...$} />;
}

export default Row;
