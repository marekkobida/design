import CSS from '../CSS';

class Label extends CSS {
  css (): string {
    return `label {
  display: inline-block;
  font-weight: var(--heading--font-weight);
}`;
  }
}

export default Label;
