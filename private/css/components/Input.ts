import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 0.125rem solid rgba(var(--color), 0.25);
  display: block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  width: 100%;
}
input:focus {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}`;
  }
}

export default Input;
