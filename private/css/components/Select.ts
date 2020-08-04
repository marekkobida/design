import CSS from '../CSS';

class Select extends CSS {
  css (): string {
    return `.select {
  appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 12L16 20L24 12' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
  /*                         | pR */
  background-position: right var(--size-3) center;
  background-repeat: no-repeat;
  background-size: contain;
  border: var(--select\\(border-width\\)) solid rgb(var(--select\\(border-color\\)));
  border-radius: var(--select\\(border-radius\\));
  color: rgb(var(--select\\(color\\)));
  display: block;
  /*       | pT               | pB            | pR                | pT                                                                       | pB          | pL */
  padding: var(--size-2) calc(var(--size-2) + var(--size-3) * 2 + var(--size-2) + var(--body\\(font-size\\)) * var(--body\\(line-height\\))) var(--size-2) var(--size-3);
  transition: background-color 0.25s, border-color 0.25s, box-shadow 0.25s;
  width: 100%;
}
.select:focus {
  background-color: rgb(var(--select\\(focus\\)\\(background-color\\)));
  border-color: rgb(var(--select\\(focus\\)\\(border-color\\)));
  box-shadow: 0 0 0 var(--select\\(border-width\\)) rgba(var(--select\\(focus\\)\\(border-color\\)), 0.25);
  color: rgb(var(--select\\(focus\\)\\(color\\)));
  outline: 0;
}`;
  }
}

export default Select;
