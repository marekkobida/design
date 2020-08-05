import CSS from '../CSS';

class Layout extends CSS {
  column (): string {
    return `.column {
  flex: 1 0 0%;
  padding-left: var(--size-3);
  padding-right: var(--size-3);
}`;
  }

  columnOffsets (): string {
    return this.forBreakpoints(
      (breakpoint) => this.for(
        ($, i) => `.${breakpoint.name}column_offset_${i} {
  margin-left: ${this.percentage(i, this.variables.columns)};
}`,
        this.variables.columns
      )
    );
  }

  columnSizes (): string {
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

  container (): string {
    return `.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
  padding-left: var(--size-3);
  padding-right: var(--size-3);
}`;
  }

  row (): string {
    return `.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--size-3) * -1);
  margin-right: calc(var(--size-3) * -1);
}`;
  }

  css (): string {
    return `${this.column()}
${this.columnOffsets()}
${this.columnSizes()}
${this.container()}
${this.row()}`;
  }
}

export default Layout;
