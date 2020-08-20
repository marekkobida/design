/*
 * Copyright 2020 Marek Kobida
 */

import * as helpers from '@redredsk/helpers/private';

import css from '../../index.css';

export type DecodedClassName = string;

export type EncodedClassName =
  | EncodedClassName[]
  | boolean
  | null
  | number
  | string
  | undefined
  | { [decodedClassName: string]: boolean | null | undefined; };

function $ (...encodedClassNames: EncodedClassName[]): DecodedClassName[] {
  let decodedClassNames: DecodedClassName[] = [];

  function addDecodedClassName (decodedClassName: DecodedClassName) {
    decodedClassNames = [ ...decodedClassNames, decodedClassName, ];
  }

  for (const encodedClassName of encodedClassNames) {
    if (helpers.types.isArray(encodedClassName)) {
      for (const decodedClassName of $(...encodedClassName)) {
        addDecodedClassName(decodedClassName);
      }
    }

    if (helpers.types.isNumber(encodedClassName)) {
      addDecodedClassName(`${encodedClassName}`);
    }

    if (helpers.types.isObject(encodedClassName)) {
      for (const decodedClassName in encodedClassName) {
        if (encodedClassName[decodedClassName]) {
          addDecodedClassName(decodedClassName);
        }
      }
    }

    if (helpers.types.isString(encodedClassName)) {
      for (const decodedClassName of encodedClassName.split(' ')) {
        addDecodedClassName(decodedClassName);
      }
    }
  }

  return decodedClassNames;
}

function decodeClassName (...encodedClassNames: EncodedClassName[]): DecodedClassName | undefined {
  const decodedClassNames = $(...encodedClassNames);

  if (decodedClassNames.length > 0) {
    for (const i in decodedClassNames) {
      const decodedClassName = decodedClassNames[i];

      decodedClassNames[i] = css[decodedClassName] || decodedClassName;
    }

    return decodedClassNames.join(' ');
  }
}

export default decodeClassName;
