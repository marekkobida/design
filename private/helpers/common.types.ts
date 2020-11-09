/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import { CommonParameters } from './decodeCommonParameters';

export type Test<T extends React.ElementType> = CommonParameters &
  Omit<React.ComponentPropsWithoutRef<T>, keyof CommonParameters>;
