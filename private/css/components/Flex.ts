import variables from '../../variables.json';
import CSS from '../CSS';

class Flex extends CSS {
  css ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex {
  display: flex !important;
}
.${breakpoint.name}align-items-\\# {
  align-items: center !important;
}
.${breakpoint.name}align-items-baseline {
  align-items: baseline !important;
}
.${breakpoint.name}align-items-end {
  align-items: flex-end !important;
}
.${breakpoint.name}align-items-start {
  align-items: flex-start !important;
}
.${breakpoint.name}flex-direction-column {
  flex-direction: column !important;
}
.${breakpoint.name}flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint.name}flex-direction-row {
  flex-direction: row !important;
}
.${breakpoint.name}flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}
.${breakpoint.name}flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.name}flex-wrap-wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.name}flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.${breakpoint.name}inline-flex {
  display: inline-flex !important;
}
.${breakpoint.name}justify-content-\\# {
  justify-content: center !important;
}
.${breakpoint.name}justify-content-baseline {
  justify-content: baseline !important;
}
.${breakpoint.name}justify-content-end {
  justify-content: flex-end !important;
}
.${breakpoint.name}justify-content-start {
  justify-content: flex-start !important;
}`,
      breakpoints
    );
  }
}

export default Flex;
