/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters, } from '../helpers/decodeCommonParameters';

import Div from './html/Div';

function Container ({ mX = 'auto', pX = 4, ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters>) {
  const { className, ...commonParameters } = { mX, pX, ...parameters, };

  return <Div {...commonParameters} className={[ 'container', className, ]} />;
}

export default Container;
