import CSS from '../CSS';

class Typography extends CSS {
  textAlign (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}text-align-center {
  text-align: center !important;
}
.${breakpoint.left}text-align-end {
  text-align: end !important;
}
.${breakpoint.left}text-align-justify {
  text-align: justify !important;
}
.${breakpoint.left}text-align-left {
  text-align: left !important;
}
.${breakpoint.left}text-align-match-parent {
  text-align: match-parent !important;
}
.${breakpoint.left}text-align-right {
  text-align: right !important;
}
.${breakpoint.left}text-align-start {
  text-align: start !important;
}`
    );
  }

  css (): string {
    return `.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading--font-family);
  font-weight: var(--heading--font-weight);
  line-height: var(--heading--line-height);
}
.h1, h1 {
  font-size: var(--h1--font-size);
}
.h2, h2 {
  font-size: var(--h2--font-size);
}
.h3, h3 {
  font-size: var(--h3--font-size);
}
.h4, h4 {
  font-size: var(--h4--font-size);
}
.h5, h5 {
  font-size: var(--h5--font-size);
}
.h6, h6 {
  font-size: var(--h6--font-size);
}
${this.textAlign()}`;
  }
}

export default Typography;
