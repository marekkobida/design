import CSS from '../CSS';

class Form extends CSS {
  css (): string {
    return `.input-checkbox, .input-radio {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: var(--size-6);
  width: var(--size-6);
}
.input-checkbox:checked, .input-radio:checked {
  background-color: rgb(var(--input\\(checked\\)\\(background-color\\)));
  border-color: rgb(var(--input\\(checked\\)\\(border-color\\)));
}
.input, .input-checkbox, .input-radio, .textarea {
  appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: var(--input\\(border-width\\)) solid rgb(var(--input\\(border-color\\)));
  border-radius: var(--input\\(border-radius\\));
  color: rgb(var(--input\\(color\\)));
  display: block;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.input::placeholder, .textarea::placeholder {
  color: rgba(var(--input\\(color\\)), 0.25);
}
.input:focus, .textarea:focus {
  border-color: rgb(var(--input\\(focus\\)\\(border-color\\)));
  box-shadow: 0 0 0 var(--input\\(border-width\\)) rgba(var(--input\\(focus\\)\\(border-color\\)), 0.25);
  color: rgb(var(--input\\(focus\\)\\(color\\)));
  outline: 0;
}
.input-checkbox:checked {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 15L14 21L24 11' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
}
.input-radio {
  border-radius: 50%;
}
.input-radio:checked {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16Z' fill='white'/%3E%3C/svg%3E%0A");
}
.input, .textarea {
  padding: var(--size-2) var(--size-3);
  width: 100%;
}
.label {
  color: rgb(var(--label\\(color\\)));
  display: inline-block;
}
.select {
  appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 12L16 20L24 12' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
  /*                         | pR */
  background-position: right var(--size-3) center;
  background-repeat: no-repeat;
  background-size: contain;
  border: var(--select\\(border-width\\)) solid rgb(var(--select\\(border-color\\)));
  border-radius: var(--select\\(border-radius\\));
  color: rgb(var(--select\\(color\\)));
  display: block;
  /*       | pT               | pB            | pR                | pT                                                                       | pB          | pL */
  padding: var(--size-2) calc(var(--size-2) + var(--size-3) * 2 + var(--size-2) + var(--body\\(font-size\\)) * var(--body\\(line-height\\))) var(--size-2) var(--size-3);
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
  width: 100%;
}
.select:focus {
  background-color: rgb(var(--select\\(focus\\)\\(background-color\\)));
  border-color: rgb(var(--select\\(focus\\)\\(border-color\\)));
  box-shadow: 0 0 0 var(--select\\(border-width\\)) rgba(var(--select\\(focus\\)\\(border-color\\)), 0.25);
  color: rgb(var(--select\\(focus\\)\\(color\\)));
  outline: 0;
}`;
  }
}

export default Form;
