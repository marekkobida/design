import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `button {
  -moz-appearance: button;
  -webkit-appearance: button;
  background-color: #fff;
  border: 0.125rem solid rgba(var(--color), 0.25);
  border-radius: 0;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}
button:focus,
button:hover {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}`;
  }
}

export default Button;
