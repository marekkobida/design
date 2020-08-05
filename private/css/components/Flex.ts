import CSS from '../CSS';

class Flex extends CSS {
  alignContent (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}align-content-baseline {
  align-content: baseline !important;
}
.${breakpoint.name}align-content-center {
  align-content: center !important;
}
.${breakpoint.name}align-content-end {
  align-content: end !important;
}
.${breakpoint.name}align-content-flex-end {
  align-content: flex-end !important;
}
.${breakpoint.name}align-content-flex-start {
  align-content: flex-start !important;
}
.${breakpoint.name}align-content-normal {
  align-content: normal !important;
}
.${breakpoint.name}align-content-space-around {
  align-content: space-around !important;
}
.${breakpoint.name}align-content-space-between {
  align-content: space-between !important;
}
.${breakpoint.name}align-content-space-evenly {
  align-content: space-evenly !important;
}
.${breakpoint.name}align-content-start {
  align-content: start !important;
}
.${breakpoint.name}align-content-stretch {
  align-content: stretch !important;
}`
    );
  }

  alignItems (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}align-items-baseline {
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
}`
    );
  }

  alignSelf (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}align-self-auto {
  align-self: auto !important;
}
.${breakpoint.name}align-self-baseline {
  align-self: baseline !important;
}
.${breakpoint.name}align-self-center {
  align-self: center !important;
}
.${breakpoint.name}align-self-end {
  align-self: end !important;
}
.${breakpoint.name}align-self-flex-end {
  align-self: flex-end !important;
}
.${breakpoint.name}align-self-flex-start {
  align-self: flex-start !important;
}
.${breakpoint.name}align-self-normal {
  align-self: normal !important;
}
.${breakpoint.name}align-self-self-end {
  align-self: self-end !important;
}
.${breakpoint.name}align-self-self-start {
  align-self: self-start !important;
}
.${breakpoint.name}align-self-start {
  align-self: start !important;
}
.${breakpoint.name}align-self-stretch {
  align-self: stretch !important;
}`
    );
  }

  flexDirection (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex-direction-column {
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
}`
    );
  }

  flexWrap (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}flex-wrap-nowrap {
  flex-wrap: nowrap !important;
}
.${breakpoint.name}flex-wrap-wrap {
  flex-wrap: wrap !important;
}
.${breakpoint.name}flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}`
    );
  }

  justifyContent (): string {
    return this.forBreakpoints(
      (breakpoint) => `.${breakpoint.name}justify-content-center {
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
