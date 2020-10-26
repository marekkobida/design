/*
 * Copyright 2020 Marek Kobida
 */

import fs from 'fs';

import variables from '../variables';

import button from './button';
import alignContent from './commonParameters/alignContent';
import alignItems from './commonParameters/alignItems';
import alignSelf from './commonParameters/alignSelf';
import display from './commonParameters/display';
import flex from './commonParameters/flex';
import flexDirection from './commonParameters/flexDirection';
import flexWrap from './commonParameters/flexWrap';
import justifyContent from './commonParameters/justifyContent';
import textAlign from './commonParameters/textAlign';
import width from './commonParameters/width';
import f from './f';
import fb from './fb';
import form from './form';
import helpers from './helpers';

function container () {
  return fb((breakpoint) => breakpoint.size ? `.container {\n  max-width: ${breakpoint.size}rem !important;\n}` : `.container {\n  width: 100% !important;\n}`);
}

function root () {
  return `:root {
${f(($) => `  --${$.left}: ${$.right};`, variables[':root'])}
}
*, *::after, *::before {
  box-sizing: border-box;
}
.absolute {
  position: absolute;
}
.border {
  border: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-bottom {
  border-bottom: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-left {
  border-left: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-radius {
  border-radius: 0.125rem;
}
.border-right {
  border-right: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.border-top {
  border-top: var(--border--border-width) solid rgb(var(--border--border-color)) !important;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading--font-family);
  font-weight: var(--heading--font-weight);
  line-height: var(--heading--line-height);
}
.h1, h1 {
  font-size: var(--h1--font-size);
}
.h2, h2 {
  font-size: var(--h2--font-size);
}
.h3, h3 {
  font-size: var(--h3--font-size);
}
.h4, h4 {
  font-size: var(--h4--font-size);
}
.h5, h5 {
  font-size: var(--h5--font-size);
}
.h6, h6 {
  font-size: var(--h6--font-size);
}
.relative {
  position: relative;
}
a {
  color: inherit;
  text-decoration: none;
}
a:focus, a:hover {
  text-decoration: underline;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: rgb(var(--body--background-color));
  color: rgb(var(--body--color));
  font-family: var(--body--font-family);
  font-size: var(--body--font-size);
  font-weight: var(--body--font-weight);
  line-height: var(--body--line-height);
  margin: 0;
}
button {
  border-radius: 0; /* Microsoft Edge */
}
button, [type="button"], [type="reset"], [type="submit"] {
  -moz-appearance: button;
  -webkit-appearance: button;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}
button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
textarea {
  resize: vertical;
}`;
}

fs.writeFileSync('./packages/design/public/commonParameters/alignContent.css', alignContent());
fs.writeFileSync('./packages/design/public/commonParameters/alignItems.css', alignItems());
fs.writeFileSync('./packages/design/public/commonParameters/alignSelf.css', alignSelf());
fs.writeFileSync('./packages/design/public/commonParameters/display.css', display());
fs.writeFileSync('./packages/design/public/commonParameters/flex.css', flex());
fs.writeFileSync('./packages/design/public/commonParameters/flexDirection.css', flexDirection());
fs.writeFileSync('./packages/design/public/commonParameters/flexWrap.css', flexWrap());
fs.writeFileSync('./packages/design/public/commonParameters/justifyContent.css', justifyContent());
fs.writeFileSync('./packages/design/public/commonParameters/textAlign.css', textAlign());
fs.writeFileSync('./packages/design/public/commonParameters/width.css', width());

fs.writeFileSync('./packages/design/public/button.css', button());
fs.writeFileSync('./packages/design/public/container.css', container());
fs.writeFileSync('./packages/design/public/form.css', form());
fs.writeFileSync('./packages/design/public/helpers.css', helpers());
fs.writeFileSync('./packages/design/public/root.css', root());

fs.writeFileSync('./packages/design/public/index.css', `${root()}
${alignContent()}
${alignItems()}
${alignSelf()}
${button()}
${container()}
${display()}
${flex()}
${flexDirection()}
${flexWrap()}
${form()}
${helpers()}
${justifyContent()}
${textAlign()}
${width()}`);
