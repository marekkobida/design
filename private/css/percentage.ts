function percentage (i: number, ii: number): string {
  const $ = (i / ii) * 100;

  if ($ === 0) {
    return '0';
  }

  return `${$.toFixed(6)}%`;
}

export default percentage;
