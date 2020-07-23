import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `button {
  --button\\(background-color\\): 255, 255, 255;
  --button\\(border-color\\): var(--color);
  appearance: button;
  background-color: rgb(var(--button\\(background-color\\)));
  border: 0.125rem solid rgba(var(--button\\(border-color\\)), 0.25);
  border-radius: 0.25rem;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0.75rem 1.25rem;
}
button:focus,
button:hover {
  border-color: rgba(var(--button\\(border-color\\)), 0.75);
  outline: 0;
}
button:not(:disabled) {
  cursor: pointer;
}`;
  }
}

export default Button;
