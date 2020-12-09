/*
 * Copyright 2020 Marek Kobida
 */

export interface Breakpoint {
  name: string;
  size: string;
}

export interface Neviem {
  [selectorText: string]: Neviem | Partial<CSSStyleDeclaration>;
}
