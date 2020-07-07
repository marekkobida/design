function encodeClassName (parameters: string[]): string[] {
  const css = require('../../index.css');

  for (const i in parameters) {
    const encodedClassName = css[parameters[i]];

    if (encodedClassName) {
      parameters[i] = encodedClassName;
    }
  }

  return parameters;
}

export default encodeClassName;
