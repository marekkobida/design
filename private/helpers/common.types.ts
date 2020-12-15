/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters } from './decodeCommonParameters';

export type ElementParametersWithCommonParameters<
  ElementType extends React.ElementType
> = Partial<CommonParameters> &
  Omit<React.ComponentPropsWithoutRef<ElementType>, keyof CommonParameters>;
