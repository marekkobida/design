import CSS from '../CSS';

class Select extends CSS {
  css (): string {
    return `select {
  --select\\(background-color\\): 255, 255, 255;
  --select\\(background-size\\): ${this.test(24)};
  --select\\(border-color\\): 64, 64, 64;
  --select\\(border-radius\\): ${this.test(2)};
  --select\\(border-width\\): ${this.test(2)};
  --select\\(focus\\)\\(border-color\\): 128, 128, 128;
  --select\\(padding-bottom\\): ${this.test(8)};
  --select\\(padding-left\\): ${this.test(16)};
  --select\\(padding-right\\): ${this.test(32)};
  --select\\(padding-top\\): ${this.test(8)};
  appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  background-position: right calc((var(--select\\(padding-right\\)) - var(--select\\(background-size\\))) / 2) center;
  background-repeat: no-repeat;
  background-size: var(--select\\(background-size\\));
  border: var(--select\\(border-width\\)) solid rgb(var(--select\\(border-color\\)));
  border-radius: var(--select\\(border-radius\\));
  display: block;
  padding: var(--select\\(padding-top\\)) var(--select\\(padding-right\\)) var(--select\\(padding-bottom\\)) var(--select\\(padding-left\\));
  width: 100%;
}
select:focus {
  border-color: rgb(var(--select\\(focus\\)\\(border-color\\)));
  outline: 0;
}`;
  }
}

export default Select;
