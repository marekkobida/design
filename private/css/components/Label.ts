import CSS from '../CSS';

class Label extends CSS {
  css (): string {
    return `label {
  display: inline-block;
  font-weight: 500;
}`;
  }
}

export default Label;
