import isArray from '@redredsk/helpers/private/types/isArray';
import isNumber from '@redredsk/helpers/private/types/isNumber';
import isObject from '@redredsk/helpers/private/types/isObject';
import isString from '@redredsk/helpers/private/types/isString';

import encodeClassName from './encodeClassName';

export type ClassNameArray = ClassName[];

export type ClassNameObject = { [className: string]: boolean | null | undefined };

export type ClassName =
  | ClassNameArray
  | ClassNameObject
  | null
  | number
  | string
  | undefined;

function testArray (classNames: ClassNameArray, $: string[]): string[] {
  for (const className of test(...classNames)) {
    $ = [ ...$, className, ];
  }

  return $;
}

function testObject (classNames: ClassNameObject, $: string[]): string[] {
  for (const className in classNames) {
    if (classNames[className]) {
      $ = [ ...$, className, ];
    }
  }

  return $;
}

function testString (classNames: string, $: string[]) {
  for (const className of classNames.split(' ')) {
    $ = [ ...$, className, ];
  }

  return $;
}

function test (...classNames: ClassNameArray): string[] {
  let $: string[] = [];

  for (const className of classNames) {
    if (isArray(className)) {
      $ = testArray(className, $);
    }

    if (isNumber(className)) {
      $ = [ ...$, `${className}`, ];
    }

    if (isObject(className)) {
      $ = testObject(className, $);
    }

    if (isString(className)) {
      $ = testString(className, $);
    }
  }

  return $;
}

function createClassName (...parameters: ClassNameArray): string {
  let $ = test(...parameters);

  if (process.env.NODE_ENV !== 'test') {
    $ = encodeClassName($);
  }

  return $.join(' ');
}

export default createClassName;
