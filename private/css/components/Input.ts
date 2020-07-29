import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  --input\\(background-color\\): 255, 255, 255;
  --input\\(border-color\\): 64, 64, 64;
  --input\\(border-radius\\): ${this.test(2)};
  --input\\(border-width\\): ${this.test(2)};
  --input\\(color\\): var(--color);
  --input\\(focus\\)\\(border-color\\): 128, 128, 128;
  appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: var(--input\\(border-width\\)) solid rgb(var(--input\\(border-color\\)));
  border-radius: var(--input\\(border-radius\\));
  color: --input\\(color\\);
  display: block;
}
input::placeholder {
  color: rgba(var(--input\\(color\\)), 0.5);
}
input:focus {
  border-color: rgb(var(--input\\(focus\\)\\(border-color\\)));
  outline: 0;
}
input[type="checkbox"],
input[type="radio"] {
  height: ${this.test(20)};
  width: ${this.test(20)};
}
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  border-color: rgb(var(--input\\(focus\\)\\(border-color\\)));
  border-width: calc(var(--input\\(border-width\\)) * 2);
}
input[type="radio"] {
  border-radius: 50%;
}
input[type="text"] {
  padding: ${this.test(8)} ${this.test(16)};
  width: 100%;
}`;
  }
}

export default Input;
