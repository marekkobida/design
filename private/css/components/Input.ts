import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  --input\\(background-color\\): 255, 255, 255;
  --input\\(border-color\\): var(--color);
  --input\\(color\\): var(--color);
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: 0.125rem solid rgba(var(--input\\(border-color\\)), 0.25);
  border-radius: 0.25rem;
  color: rgb(var(--input\\(color\\)));
  display: block;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0.5rem 1rem;
  width: 100%;
}
input:focus {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}`;
  }
}

export default Input;
