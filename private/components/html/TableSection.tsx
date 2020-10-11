/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function TableSection ({ $, ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'tbody'>, keyof CommonParameters> & { $: 'tbody' | 'tfoot' | 'thead'; }) {
  const { className, ...commonParameters } = decodeCommonParameters(parameters);

  return <$ {...commonParameters} className={decodeClassName(className)} />;
}

export default TableSection;
