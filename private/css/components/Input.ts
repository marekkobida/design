import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  --input\\(background-color\\): 255, 255, 255;
  --input\\(border-color\\): var(--color);
  -webkit-appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: 0.125rem solid rgba(var(--input\\(border-color\\)), 0.5);
  border-radius: 0.1875rem;
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  transition: border-color 0.125s ease-in-out;
}
input::placeholder {
  color: rgba(var(--input\\(border-color\\)), 0.25);
}
input[type="checkbox"],
input[type="radio"] {
  height: 1.25rem;
  width: 1.25rem;
}
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  border-color: rgba(var(--color), 0.75);
  border-width: 0.1875rem;
}
input[type="checkbox"]:focus,
input[type="radio"]:focus {
  outline: 0;
}
input[type="radio"] {
  border-radius: 50%;
}
input[type="text"] {
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
