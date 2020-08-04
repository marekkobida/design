import CSS from '../CSS';

class Label extends CSS {
  css (): string {
    return `label {
  color: rgb(var(--label\\(color\\)));
  display: inline-block;
}`;
  }
}

export default Label;
