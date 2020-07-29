import CSS from '../CSS';

class Select extends CSS {
  css (): string {
    return `select {
  appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  background-image: url(~@redredsk/design/private/select.svg);
  background-position: right var(--select\\(padding-right\\)) center;
  background-repeat: no-repeat;
  background-size: contain;
  border: var(--select\\(border-width\\)) solid rgb(var(--select\\(border-color\\)));
  border-radius: var(--select\\(border-radius\\));
  display: block;
  padding: var(--select\\(padding-top\\)) calc(var(--select\\(padding-bottom\\)) + var(--select\\(padding-right\\)) + var(--select\\(padding-top\\)) + var(--body\\(font-size\\)) * var(--body\\(line-height\\))) var(--select\\(padding-bottom\\)) var(--select\\(padding-left\\));
  width: 100%;
}
select:focus {
  border-color: rgb(var(--select\\(focus\\)\\(border-color\\)));
  outline: 0;
}`;
  }
}

export default Select;
