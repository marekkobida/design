import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `.button {
  background-color: rgb(var(--button--background-color));
  border: var(--button--border-width) solid rgb(var(--button--border-color));
  border-radius: var(--button--border-radius);
  color: rgb(var(--button--color));
  display: inline-block;
  padding: var(--size-2) var(--size-4);
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.button:focus {
  box-shadow: 0 0 0 var(--button--border-width) rgba(var(--select--focus--border-color), 0.25);
}
.button:focus, .button:hover {
  background-color: rgb(var(--button--focus--background-color));
  border-color: rgb(var(--button--focus--border-color));
  color: rgb(var(--button--focus--color));
  outline: 0;
}`;
  }
}

export default Button;
