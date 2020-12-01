/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters } from './decodeCommonParameters';

export type ComponentParametersWithCommonParameters<
  ElementType extends React.ElementType
> = CommonParameters &
  Omit<React.ComponentPropsWithoutRef<ElementType>, keyof CommonParameters>;
