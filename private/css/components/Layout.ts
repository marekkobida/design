import CSS from '../CSS';

class Layout extends CSS {
  column (): string {
    return `.column {
  flex: 1 0 0%;
  padding-bottom: calc(var(--y) / 2);
  padding-left: calc(var(--x) / 2);
  padding-right: calc(var(--x) / 2);
  padding-top: calc(var(--y) / 2);
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
  max-width: 60rem;
  padding-left: 1rem;
  padding-right: 1rem;
}`;
  }

  row (): string {
    return `.row {
  --x: 1.5rem;
  --y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bototm: calc(var(--y) / -2);
  margin-left: calc(var(--x) / -2);
  margin-right: calc(var(--x) / -2);
  margin-top: calc(var(--y) / -2);
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
