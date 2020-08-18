function button (): string {
  return `.button, button {
  background-color: rgb(var(--button--background-color));
  border: var(--button--border-width) solid rgb(var(--button--border-color));
  color: rgb(var(--button--color));
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.button:focus, .button:hover, button:focus, button:hover {
  background-color: rgb(var(--button--focus--background-color));
  border-color: rgb(var(--button--focus--border-color));
  color: rgb(var(--button--focus--color));
  outline: 0;
}
.button:focus, button:focus {
  box-shadow: 0 0 0 var(--button--border-width) rgba(var(--select--focus--border-color), 0.25);
}`;
}

export default button;
