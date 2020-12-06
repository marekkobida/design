/*
 * Copyright 2020 Marek Kobida
 */

export interface Breakpoint {
  name: string;
  size: number;
}

export interface Neviem {
  [CSSStyleRuleSelectorText: string]: CSSStyleDeclaration | Neviem;
}
