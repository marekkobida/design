import CSS from '../CSS';

class Input extends CSS {
  css (): string {
    return `input {
  appearance: none;
  background-color: rgb(var(--input\\(background-color\\)));
  border: var(--input\\(border-width\\)) solid rgb(var(--input\\(border-color\\)));
  border-radius: var(--input\\(border-radius\\));
  color: rgb(var(--input\\(color\\)));
  display: block;
  transition: background-color 0.25s, border-color 0.25s;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: ${this.test(24)};
  width: ${this.test(24)};
}
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background-color: rgb(var(--input\\(checked\\)\\(background-color\\)));
}
input[type="checkbox"]:checked {
  background-image: url(~@redredsk/design/private/checkbox.svg);
}
input[type="radio"] {
  border-radius: 50%;
}
input[type="radio"]:checked {
  background-image: url(~@redredsk/design/private/radio.svg);
}
input[type="text"] {
  padding: ${this.test(8)} ${this.test(12)};
  width: 100%;
}`;
  }
}

export default Input;
