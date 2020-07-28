import CSS from '../CSS';

class Select extends CSS {
  css (): string {
    return `select {
  --select\\(background-color\\): 255, 255, 255;
  --select\\(background-size\\): 1.5rem;
  --select\\(border-color\\): var(--color);
  --select\\(border-radius\\): 0.125rem;
  --select\\(border-width\\): 0.125rem;
  --select\\(padding-bottom\\): 0.5rem;
  --select\\(padding-left\\): 1rem;
  --select\\(padding-right\\): 2rem;
  --select\\(padding-top\\): 0.5rem;
  appearance: none;
  background-color: rgb(var(--select\\(background-color\\)));
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' fill='none'%3E%3Cpath d='M16 24L32 40L48 24' stroke='%23000' stroke-width='8' style='fill: var(--color)'/%3E%3C/svg%3E");
  background-position: right calc((var(--select\\(padding-right\\)) - var(--select\\(background-size\\))) / 2) center;
  background-repeat: no-repeat;
  background-size: var(--select\\(background-size\\));
  border: var(--select\\(border-width\\)) solid rgba(var(--select\\(border-color\\)), 0.5);
  border-radius: var(--select\\(border-radius\\));
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: var(--select\\(padding-top\\)) var(--select\\(padding-right\\)) var(--select\\(padding-bottom\\)) var(--select\\(padding-left\\));
  width: 100%;
}
select:focus {
  border-color: rgba(var(--color), 0.75);
  outline: 0;
}`;
  }
}

export default Select;
