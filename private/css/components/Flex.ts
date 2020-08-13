import CSS from '../CSS';

class Flex extends CSS {
  alignContent (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}align-content-baseline {
  align-content: baseline !important;
}
.${breakpoint.left}align-content-center {
  align-content: center !important;
}
.${breakpoint.left}align-content-end {
  align-content: end !important;
}
.${breakpoint.left}align-content-flex-end {
  align-content: flex-end !important;
}
.${breakpoint.left}align-content-flex-start {
  align-content: flex-start !important;
}
.${breakpoint.left}align-content-normal {
  align-content: normal !important;
}
.${breakpoint.left}align-content-space-around {
  align-content: space-around !important;
}
.${breakpoint.left}align-content-space-between {
  align-content: space-between !important;
}
.${breakpoint.left}align-content-space-evenly {
  align-content: space-evenly !important;
}
.${breakpoint.left}align-content-start {
  align-content: start !important;
}
.${breakpoint.left}align-content-stretch {
  align-content: stretch !important;
}`
    );
  }

  alignItems (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}align-items-baseline {
  align-items: baseline !important;
}
.${breakpoint.left}align-items-center {
  align-items: center !important;
}
.${breakpoint.left}align-items-end {
  align-items: end !important;
}
.${breakpoint.left}align-items-flex-end {
  align-items: flex-end !important;
}
.${breakpoint.left}align-items-flex-start {
  align-items: flex-start !important;
}
.${breakpoint.left}align-items-normal {
  align-items: normal !important;
}
.${breakpoint.left}align-items-self-end {
  align-items: self-end !important;
}
.${breakpoint.left}align-items-self-start {
  align-items: self-start !important;
}
.${breakpoint.left}align-items-start {
  align-items: start !important;
}
.${breakpoint.left}align-items-stretch {
  align-items: stretch !important;
}`
    );
  }

  alignSelf (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}align-self-auto {
  align-self: auto !important;
}
.${breakpoint.left}align-self-baseline {
  align-self: baseline !important;
}
.${breakpoint.left}align-self-center {
  align-self: center !important;
}
.${breakpoint.left}align-self-end {
  align-self: end !important;
}
.${breakpoint.left}align-self-flex-end {
  align-self: flex-end !important;
}
.${breakpoint.left}align-self-flex-start {
  align-self: flex-start !important;
}
.${breakpoint.left}align-self-normal {
  align-self: normal !important;
}
.${breakpoint.left}align-self-self-end {
  align-self: self-end !important;
}
.${breakpoint.left}align-self-self-start {
  align-self: self-start !important;
}
.${breakpoint.left}align-self-start {
  align-self: start !important;
}
.${breakpoint.left}align-self-stretch {
  align-self: stretch !important;
}`
    );
  }

  flexDirection (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}flex-direction-column {
  flex-direction: column !important;
}
.${breakpoint.left}flex-direction-column-reverse {
  flex-direction: column-reverse !important;
}
.${breakpoint.left}flex-direction-row {
  flex-direction: row !important;
}
.${breakpoint.left}flex-direction-row-reverse {
  flex-direction: row-reverse !important;
}`
    );
  }

  flexWrap (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.left}flex-wrap-wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.left}flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}`
    );
  }

  justifyContent (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.left}justify-content-center {
  justify-content: center !important;
}
.${breakpoint.left}justify-content-end {
  justify-content: end !important;
}
.${breakpoint.left}justify-content-flex-end {
  justify-content: flex-end !important;
}
.${breakpoint.left}justify-content-flex-start {
  justify-content: flex-start !important;
}
.${breakpoint.left}justify-content-left {
  justify-content: left !important;
}
.${breakpoint.left}justify-content-normal {
  justify-content: normal !important;
}
.${breakpoint.left}justify-content-right {
  justify-content: right !important;
}
.${breakpoint.left}justify-content-space-around {
  justify-content: space-around !important;
}
.${breakpoint.left}justify-content-space-between {
  justify-content: space-between !important;
}
.${breakpoint.left}justify-content-space-evenly {
  justify-content: space-evenly !important;
}
.${breakpoint.left}justify-content-start {
  justify-content: start !important;
}
.${breakpoint.left}justify-content-stretch {
  justify-content: stretch !important;
}`
    );
  }

  css (): string {
    return `${this.alignContent()}
${this.alignItems()}
${this.alignSelf()}
${this.flexDirection()}
${this.flexWrap()}
${this.justifyContent()}`;
  }
}

export default Flex;
