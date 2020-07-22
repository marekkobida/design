import variables from '../../variables.json';
import CSS from '../CSS';

class Grid extends CSS {
  createColumn (): string {
    return `.column {
  flex: 1 0 0%;
  padding-left: calc(var(--space) * 0.5);
  padding-right: calc(var(--space) * 0.5);
}`;
  }

  createColumnOffsets ({ breakpoints, columns, }: { breakpoints: typeof variables.breakpoints; columns: typeof variables.columns; }): string {
    return this.forBreakpoints(
      (breakpoint) => this.for(
        ($, i) => `.${breakpoint.name}column_offset_${i} {
  margin-left: ${this.percentage(i, columns)};
}`,
        columns
      ),
      breakpoints
    );
  }

  createColumnSizes ({ breakpoints, columns, }: { breakpoints: typeof variables.breakpoints; columns: typeof variables.columns; }): string {
    return this.forBreakpoints(
      (breakpoint) => {
        const sizes = this.for(
          ($, i) => `.${breakpoint.name}column_size_${i + 1} {
  flex: 0 0 auto;
  width: ${this.percentage(i + 1, columns)};
}`,
          columns
        );

        return `.${breakpoint.name}column_size_\\# {
  flex: 1 0 0%;
}
${sizes}
.${breakpoint.name}column_size_width {
  flex: 0 0 auto;
  width: auto;
}`;
      },
      breakpoints
    );
  }

  createContainer (): string {
    return `.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 75rem;
  padding-left: calc(var(--space) * 1);
  padding-right: calc(var(--space) * 1);
}`;
  }

  createRow (): string {
    return `.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(calc(var(--space) * 0.5) * -1);
  margin-right: calc(calc(var(--space) * 0.5) * -1);
}`;
  }

  css ({ breakpoints, columns, }: { breakpoints: typeof variables.breakpoints; columns: typeof variables.columns; }): string {
    return `${this.createColumn()}
${this.createColumnOffsets({ breakpoints, columns, })}
${this.createColumnSizes({ breakpoints, columns, })}
${this.createContainer()}
${this.createRow()}`;
  }
}

export default Grid;
