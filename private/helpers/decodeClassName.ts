/*
 * Copyright 2020 Marek Kobida
 */

import css from '../../public/index.css';

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
    // EncodedClassName[]
    if (Array.isArray(encodedClassName)) {
      for (const decodedClassName of $(...encodedClassName)) {
        addDecodedClassName(decodedClassName);
      }
    }

    // number
    if (typeof encodedClassName === 'number') {
      addDecodedClassName(`${encodedClassName}`);
    }

    // string
    if (typeof encodedClassName === 'string') {
      for (const decodedClassName of encodedClassName.split(' ')) {
        addDecodedClassName(decodedClassName);
      }
    }

    // { [decodedClassName: string]: boolean | null | undefined; }
    if (!Array.isArray(encodedClassName) && encodedClassName !== null && typeof encodedClassName === 'object') {
      for (const decodedClassName in encodedClassName) {
        if (encodedClassName[decodedClassName]) {
          addDecodedClassName(decodedClassName);
        }
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
