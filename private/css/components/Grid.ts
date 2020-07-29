import CSS from '../CSS';

class Grid extends CSS {
  createColumn (): string {
    return `.column {
  flex: 1 0 0%;
  padding-left: ${this.test(12)};
  padding-right: ${this.test(12)};
}`;
  }

  createColumnOffsets (): string {
    return this.forBreakpoints(
      (breakpoint) => this.for(
        ($, i) => `.${breakpoint.name}column_offset_${i} {
  margin-left: ${this.percentage(i, this.variables.columns)};
}`,
        this.variables.columns
      )
    );
  }

  createColumnSizes (): string {
    return this.forBreakpoints(
      (breakpoint) => {
        const sizes = this.for(
          ($, i) => `.${breakpoint.name}column_size_${i + 1} {
  flex: 0 0 auto;
  width: ${this.percentage(i + 1, this.variables.columns)};
}`,
          this.variables.columns
        );

        return `.${breakpoint.name}column_size_\\# {
  flex: 1 0 0%;
}
${sizes}
.${breakpoint.name}column_size_width {
  flex: 0 0 auto;
  width: auto;
}`;
      }
    );
  }

  createContainer (): string {
    return `.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  padding-left: ${this.test(12)};
  padding-right: ${this.test(12)};
}`;
  }

  createRow (): string {
    return `.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: ${this.test(-12)};
  margin-right: ${this.test(-12)};
}`;
  }

  css (): string {
    return `${this.createColumn()}
${this.createColumnOffsets()}
${this.createColumnSizes()}
${this.createContainer()}
${this.createRow()}`;
  }
}

export default Grid;
