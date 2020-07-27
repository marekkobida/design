import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `button {
  --button\\(background-color\\): var(--color);
  --button\\(border-color\\): var(--color);
  --button\\(color\\): 255, 255, 255;
  -webkit-appearance: button;
  background-color: rgba(var(--color), 0.5);
  border: 0;
  border-radius: 0.1875rem;
  color: rgb(var(--button\\(color\\)));
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0.75rem 1.25rem;
  transition: background-color 0.125s ease-in-out;
}
button:focus,
button:hover {
  background-color: rgba(var(--color), 0.75);
  outline: 0;
}
button:not(:disabled) {
  cursor: pointer;
}`;
  }
}

export default Button;
