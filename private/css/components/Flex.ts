import variables from '../../variables.json';
import CSS from '../CSS';

class Flex extends CSS {
  css (breakpoints = variables.breakpoints) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex {
  display: flex !important;
}
.${breakpoint.name}align-items_\\# {
  align-items: center !important;
}
.${breakpoint.name}align-items_baseline {
  align-items: baseline !important;
}
.${breakpoint.name}align-items_end {
  align-items: flex-end !important;
}
.${breakpoint.name}align-items_start {
  align-items: flex-start !important;
}
.${breakpoint.name}flex-direction_column {
  flex-direction: column !important;
}
.${breakpoint.name}flex-direction_column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint.name}flex-direction_row {
  flex-direction: row !important;
}
.${breakpoint.name}flex-direction_row-reverse {
  flex-direction: row-reverse !important;
}
.${breakpoint.name}flex-wrap_nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.name}flex-wrap_wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.name}flex-wrap_wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.${breakpoint.name}inline-flex {
  display: inline-flex !important;
}
.${breakpoint.name}justify-content_\\# {
  justify-content: center !important;
}
.${breakpoint.name}justify-content_baseline {
  justify-content: baseline !important;
}
.${breakpoint.name}justify-content_end {
  justify-content: flex-end !important;
}
.${breakpoint.name}justify-content_start {
  justify-content: flex-start !important;
}`,
      breakpoints
    );
  }
}

export default Flex;
