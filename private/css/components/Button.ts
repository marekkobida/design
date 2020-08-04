import CSS from '../CSS';

class Button extends CSS {
  css (): string {
    return `.button, button, input:matches([type="button"], [type="reset"], [type="submit"]) {
  background-color: rgb(var(--button\\(background-color\\)));
  border: var(--button\\(border-width\\)) solid rgb(var(--button\\(border-color\\)));
  border-radius: var(--button\\(border-radius\\));
  color: rgb(var(--button\\(color\\)));
  display: inline-block;
  padding: var(--size-2) var(--size-3);
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.button:focus, button:focus, input:matches([type="button"], [type="reset"], [type="submit"]):focus {
  box-shadow: 0 0 0 var(--button\\(border-width\\)) rgba(var(--select\\(focus\\)\\(border-color\\)), 0.25);
}
.button:matches(:focus, :hover), button:matches(:focus, :hover), input:matches([type="button"], [type="reset"], [type="submit"]):matches(:focus, :hover) {
  background-color: rgb(var(--button\\(focus\\)\\(background-color\\)));
  border-color: rgb(var(--button\\(focus\\)\\(border-color\\)));
  color: rgb(var(--button\\(focus\\)\\(color\\)));
  outline: 0;
}`;
  }
}

export default Button;
