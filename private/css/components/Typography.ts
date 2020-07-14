import variables from '../../variables.json';
import CSS from '../CSS';

class Typography extends CSS {
  createAlignments ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}text_alignment_\\# {
  text-align: center !important;
}
.${breakpoint.name}text_alignment_l {
  text-align: left !important;
}
.${breakpoint.name}text_alignment_r {
  text-align: right !important;
}`,
      breakpoints
    );
  }

  css ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }) {
    return `a {
  text-decoration: none;
}
a:focus,
a:hover {
  text-decoration: underline;
}
.text_size_1,
.text_size_2,
.text_size_3,
.text_size_4,
.text_size_5,
.text_size_6,
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
.text_size_1,
h1 {
  font-size: var(--h1--font-size);
}
.text_size_2,
h2 {
  font-size: var(--h2--font-size);
}
.text_size_3,
h3 {
  font-size: var(--h3--font-size);
}
.text_size_4,
h4 {
  font-size: var(--h4--font-size);
}
.text_size_5,
h5 {
  font-size: var(--h5--font-size);
}
.text_size_6,
h6 {
  font-size: var(--h6--font-size);
}
p {
  margin-bottom: 0;
  margin-top: 0;
}
${this.createAlignments({ breakpoints, })}
.text_weight_100 {
  font-weight: 100 !important;
}
.text_weight_200 {
  font-weight: 200 !important;
}
.text_weight_300 {
  font-weight: 300 !important;
}
.text_weight_400 {
  font-weight: 400 !important;
}
.text_weight_500 {
  font-weight: 500 !important;
}
.text_weight_600 {
  font-weight: 600 !important;
}
.text_weight_700 {
  font-weight: 700 !important;
}
.text_weight_800 {
  font-weight: 800 !important;
}
.text_weight_900 {
  font-weight: 900 !important;
}`;
  }
}

export default Typography;
