import CSS from '../CSS';
import variables from '../../variables.json';

class Flex extends CSS {
  css(breakpoints = variables.breakpoints) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex {
  display: flex !important;
}
.${breakpoint.name}flex_align-items_\\# {
  align-items: center !important;
}
.${breakpoint.name}flex_align-items_baseline {
  align-items: baseline !important;
}
.${breakpoint.name}flex_align-items_end {
  align-items: flex-end !important;
}
.${breakpoint.name}flex_align-items_start {
  align-items: flex-start !important;
}
.${breakpoint.name}flex_flex-direction_column {
  flex-direction: column !important;
}
.${breakpoint.name}flex_flex-direction_column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint.name}flex_flex-direction_row {
  flex-direction: row !important;
}
.${breakpoint.name}flex_flex-direction_row-reverse {
  flex-direction: row-reverse !important;
}
.${breakpoint.name}flex_flex-wrap_nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.name}flex_flex-wrap_wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.name}flex_flex-wrap_wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.${breakpoint.name}flex_justify-content_\\# {
  justify-content: center !important;
}
.${breakpoint.name}flex_justify-content_baseline {
  justify-content: baseline !important;
}
.${breakpoint.name}flex_justify-content_end {
  justify-content: flex-end !important;
}
.${breakpoint.name}flex_justify-content_start {
  justify-content: flex-start !important;
}
.${breakpoint.name}inline-flex {
  display: inline-flex !important;
}`,
      breakpoints,
    );
  }
}

export default Flex;
