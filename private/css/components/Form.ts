import CSS from '../CSS';

class Form extends CSS {
  css (): string {
    return `.input-checkbox:checked, .input-radio:checked {
  background-color: rgb(var(--input--checked--background-color));
  border-color: rgb(var(--input--checked--border-color));
}
.input, .input-checkbox, .input-radio, .textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgb(var(--input--background-color));
  border: var(--input--border-width) solid rgb(var(--input--border-color));
  color: rgb(var(--input--color));
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.input::placeholder, .textarea::placeholder {
  color: rgba(var(--input--color), 0.25);
}
.input:focus, .textarea:focus {
  border-color: rgb(var(--input--focus--border-color));
  box-shadow: 0 0 0 var(--input--border-width) rgba(var(--input--focus--border-color), 0.25);
  color: rgb(var(--input--focus--color));
  outline: 0;
}
.input-radio {
  border-radius: 50%;
}
.label {
  color: rgb(var(--label--color));
}
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgb(var(--select--background-color));
  border: var(--select--border-width) solid rgb(var(--select--border-color));
  color: rgb(var(--select--color));
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.select:focus {
  background-color: rgb(var(--select--focus--background-color));
  border-color: rgb(var(--select--focus--border-color));
  box-shadow: 0 0 0 var(--select--border-width) rgba(var(--select--focus--border-color), 0.25);
  color: rgb(var(--select--focus--color));
  outline: 0;
}`;
  }
}

export default Form;
