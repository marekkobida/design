/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import decodeClassName from '../../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../../helpers/decodeCommonParameters';

function Heading ({ headingSize = 1, mY = 0, ...parameters }: CommonParameters & Omit<React.ComponentPropsWithoutRef<'h1'>, keyof CommonParameters> & { headingSize: 1 | 2 | 3 | 4 | 5 | 6; }) {
  const { className, ...commonParameters } = decodeCommonParameters({ mY, ...parameters, });

  const H = `h${headingSize}` as 'h1';

  return <H {...commonParameters} className={decodeClassName(className)} />;
}

export default Heading;
