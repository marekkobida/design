import CSS from '../CSS';

class Grid extends CSS {
  createColumn (): string {
    return `.column {
  flex: 1 0 0%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
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
  max-width: 960px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}`;
  }

  createRow (): string {
    return `.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
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
