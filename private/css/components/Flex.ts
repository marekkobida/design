import variables from '../../variables.json';
import CSS from '../CSS';

class Flex extends CSS {
  css ({ breakpoints, }: { breakpoints: typeof variables.breakpoints; }) {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex {
  display: flex !important;
}
.${breakpoint.name}align-items-baseline {
  align-items: baseline !important;
}
.${breakpoint.name}align-items-center {
  align-items: center !important;
}
.${breakpoint.name}align-items-end {
  align-items: end !important;
}
.${breakpoint.name}align-items-flex-end {
  align-items: flex-end !important;
}
.${breakpoint.name}align-items-flex-start {
  align-items: flex-start !important;
}
.${breakpoint.name}align-items-normal {
  align-items: normal !important;
}
.${breakpoint.name}align-items-self-end {
  align-items: self-end !important;
}
.${breakpoint.name}align-items-self-start {
  align-items: self-start !important;
}
.${breakpoint.name}align-items-start {
  align-items: start !important;
}
.${breakpoint.name}align-items-stretch {
  align-items: stretch !important;
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
.${breakpoint.name}justify-content-center {
  justify-content: center !important;
}
.${breakpoint.name}justify-content-end {
  justify-content: end !important;
}
.${breakpoint.name}justify-content-flex-end {
  justify-content: flex-end !important;
}
.${breakpoint.name}justify-content-flex-start {
  justify-content: flex-start !important;
}
.${breakpoint.name}justify-content-left {
  justify-content: left !important;
}
.${breakpoint.name}justify-content-normal {
  justify-content: normal !important;
}
.${breakpoint.name}justify-content-right {
  justify-content: right !important;
}
.${breakpoint.name}justify-content-space-around {
  justify-content: space-around !important;
}
.${breakpoint.name}justify-content-space-between {
  justify-content: space-between !important;
}
.${breakpoint.name}justify-content-space-evenly {
  justify-content: space-evenly !important;
}
.${breakpoint.name}justify-content-start {
  justify-content: start !important;
}
.${breakpoint.name}justify-content-stretch {
  justify-content: stretch !important;
}`,
      breakpoints
    );
  }
}

export default Flex;
