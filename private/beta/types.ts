/*
 * Copyright 2020 Marek Kobida
 */

export interface Breakpoint {
  name: string;
  size: string;
}

export interface Neviem {
  [CSSStyleRuleSelectorText: string]: Partial<CSSStyleDeclaration> | Neviem;
}
