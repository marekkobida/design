/*
 * Copyright 2020 Marek Kobida
 */

import isArray from 'helpers/private/types/isArray';
import isNumber from 'helpers/private/types/isNumber';
import isObject from 'helpers/private/types/isObject';
import isString from 'helpers/private/types/isString';

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
    if (isArray(encodedClassName)) {
      for (const decodedClassName of $(...encodedClassName)) {
        addDecodedClassName(decodedClassName);
      }
    }

    if (isNumber(encodedClassName)) {
      addDecodedClassName(`${encodedClassName}`);
    }

    if (isObject(encodedClassName)) {
      for (const decodedClassName in encodedClassName) {
        if (encodedClassName[decodedClassName]) {
          addDecodedClassName(decodedClassName);
        }
      }
    }

    if (isString(encodedClassName)) {
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
