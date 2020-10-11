/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters, } from '../helpers/decodeCommonParameters';

import Div from './html/Div';

function Column ({ flex = 'none', pX = 2, width = 'auto', ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>) {
  const $ = { flex, pX, width, ...parameters, };

  return <Div {...$} />;
}

export default Column;
