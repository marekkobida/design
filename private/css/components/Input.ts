import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  --input\\(background-color\\): 255, 255, 255;
  --input\\(border-color\\): var(--color);
  appearance: none;
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}
input[type="checkbox"] {
  background-color: rgb(var(--input\\(background-color\\)));
  border: 0.125rem solid rgba(var(--input\\(border-color\\)), 0.25);
  border-radius: 0.25rem;
  height: 1.25rem;
  width: 1.25rem;
}
input[type="checkbox"]:checked {
  border-color: rgba(var(--color), 0.75);
  border-width: 0.25rem;
}
input[type="radio"] {
  background-color: rgb(var(--input\\(background-color\\)));
  border: 0.125rem solid rgba(var(--input\\(border-color\\)), 0.25);
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
}
input[type="radio"]:checked {
  border-color: rgba(var(--color), 0.75);
  border-width: 0.25rem;
}
input[type="radio"]:focus {
  outline: 0;
}
input[type="text"] {
  background-color: rgb(var(--input\\(background-color\\)));
  border: 0.125rem solid rgba(var(--input\\(border-color\\)), 0.25);
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
}
input[type="text"]:focus {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}`;
  }
}

export default Input;
