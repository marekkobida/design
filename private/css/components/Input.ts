import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input, textarea {
  appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: var(--input\\(border-width\\)) solid rgb(var(--input\\(border-color\\)));
  border-radius: var(--input\\(border-radius\\));
  color: rgb(var(--input\\(color\\)));
  display: block;
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
input::placeholder, textarea::placeholder {
  color: rgba(var(--input\\(color\\)), 0.25);
}
input:focus, textarea:focus {
  border-color: rgb(var(--input\\(focus\\)\\(border-color\\)));
  box-shadow: 0 0 0 var(--input\\(border-width\\)) rgba(var(--input\\(focus\\)\\(border-color\\)), 0.25);
  color: rgb(var(--input\\(focus\\)\\(color\\)));
  outline: 0;
}
input[type="checkbox"], input[type="radio"] {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: var(--size-6);
  width: var(--size-6);
}
input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 15L14 21L24 11' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
}
input[type="checkbox"]:checked, input[type="radio"]:checked {
  background-color: rgb(var(--input\\(checked\\)\\(background-color\\)));
  border-color: rgb(var(--input\\(checked\\)\\(border-color\\)));
}
input[type="radio"] {
  border-radius: 50%;
}
input[type="radio"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16Z' fill='white'/%3E%3C/svg%3E%0A");
}
input[type="text"], textarea {
  padding: var(--size-2) var(--size-3);
  width: 100%;
}`;
  }
}

export default Input;
