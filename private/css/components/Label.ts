import CSS from '../CSS';

class Label extends CSS {
  css (): string {
    return `label {
  color: rgb(var(--label\\(color\\)));
  display: inline-block;
  margin-bottom: var(--size-2);
}`;
  }
}

export default Label;
