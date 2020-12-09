/*
 * Copyright 2020 Marek Kobida
 */

export interface Breakpoint {
  name: string;
  size: string;
}

export interface CSS {
  [selectorText: string]: CSS | Partial<CSSStyleDeclaration>;
}
