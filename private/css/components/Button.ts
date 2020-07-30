import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `button {
  appearance: button;
  background-color: rgb(var(--button\\(background-color\\)));
  border: var(--button\\(border-width\\)) solid rgb(var(--button\\(border-color\\)));
  border-radius: var(--button\\(border-radius\\));
  color: rgb(var(--button\\(color\\)));
  display: inline-block;
  padding: ${this.test(8)} ${this.test(12)};
  transition: background-color 0.25s, border-color 0.25s;
}
button:focus,
button:hover {
  background-color: rgb(var(--button\\(focus\\)\\(background-color\\)));
  border-color: rgb(var(--button\\(focus\\)\\(border-color\\)));
  outline: 0;
}
button:not(:disabled) {
  cursor: pointer;
}`;
  }
}

export default Button;
