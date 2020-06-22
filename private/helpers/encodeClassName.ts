import css from '../../index.css';

function encodeClassName (parameters: string[]): string[] {
  for (let i = 0; i < parameters.length; i += 1) {
    const encodedClassName = css[parameters[i]];

    if (encodedClassName) {
      parameters[i] = encodedClassName;
    }
  }

  return parameters;
}

export default encodeClassName;
