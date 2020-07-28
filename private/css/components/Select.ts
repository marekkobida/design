import CSS from '../CSS';

class Select extends CSS {
  css (): string {
    return `select {
  --select\\(background-color\\): 255, 255, 255;
  --select\\(border-color\\): var(--color);
  -webkit-appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  border: 0.125rem solid rgba(var(--select\\(border-color\\)), 0.5);
  border-radius: 0.1875rem;
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0.75rem 1.25rem;
}
select:focus {
  outline: 0;
}`;
  }
}

export default Select;
