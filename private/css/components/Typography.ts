import variables from '../../variables.json';
import CSS from '../CSS';

class Typography extends CSS {
  createAlignments (breakpoints = variables.breakpoints) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}t_alignment_\\# {
  text-align: center !important;
}
.${breakpoint.name}t_alignment_l {
  text-align: left !important;
}
.${breakpoint.name}t_alignment_r {
  text-align: right !important;
}`,
      breakpoints
    );
  }

  css (breakpoints = variables.breakpoints) {
    return `a {
  text-decoration: none;
}
a:focus,
a:hover {
  text-decoration: underline;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--heading--font-family);
  font-weight: var(--heading--font-weight);
  line-height: var(--heading--line-height);
  margin-bottom: 0;
  margin-top: 0;
}
.h1,
h1 {
  font-size: var(--h1--font-size);
}
.h2,
h2 {
  font-size: var(--h2--font-size);
}
.h3,
h3 {
  font-size: var(--h3--font-size);
}
.h4,
h4 {
  font-size: var(--h4--font-size);
}
.h5,
h5 {
  font-size: var(--h5--font-size);
}
.h6,
h6 {
  font-size: var(--h6--font-size);
}
p {
  margin-bottom: 0;
  margin-top: 0;
}
.color-alpha_100 {
  --color-alpha: 1;
}
.color-alpha_75 {
  --color-alpha: 0.75;
}
.color-alpha_50 {
  --color-alpha: 0.5;
}
.color-alpha_25 {
  --color-alpha: 0.25;
}
.color-alpha_0 {
  --color-alpha: 0;
}
${this.createAlignments(breakpoints)}
.t_weight_100 {
  font-weight: 100 !important;
}
.t_weight_200 {
  font-weight: 200 !important;
}
.t_weight_300 {
  font-weight: 300 !important;
}
.t_weight_400 {
  font-weight: 400 !important;
}
.t_weight_500 {
  font-weight: 500 !important;
}
.t_weight_600 {
  font-weight: 600 !important;
}
.t_weight_700 {
  font-weight: 700 !important;
}
.t_weight_800 {
  font-weight: 800 !important;
}
.t_weight_900 {
  font-weight: 900 !important;
}`;
  }
}

export default Typography;
