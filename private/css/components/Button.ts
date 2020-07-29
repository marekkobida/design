import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `button {
  --button\\(background-color\\): var(--color);
  --button\\(border-radius\\): ${this.test(2)};
  --button\\(color\\): 255, 255, 255;
  --button\\(focus\\)\\(background-color\\): 64, 64, 64;
  appearance: button;
  background-color: rgb(var(--button\\(background-color\\)));
  border: 0;
  border-radius: var(--button\\(border-radius\\));
  color: rgb(var(--button\\(color\\)));
  display: inline-block;
  padding: ${this.test(8)} ${this.test(16)};
}
button:focus,
button:hover {
  background-color: rgb(var(--button\\(focus\\)\\(background-color\\)));
  outline: 0;
}
button:not(:disabled) {
  cursor: pointer;
}`;
  }
}

export default Button;
