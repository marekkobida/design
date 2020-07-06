import variables from '../../variables.json';
import CSS from '../CSS';

class Grid extends CSS {
  createColumn () {
    return `.column {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
}`;
  }

  createColumnOffsets (columns: number = variables.columns, breakpoints = variables.breakpoints) {
    return this.forBreakpoints(
      (breakpoint) => this.test(
        (i) => `.${breakpoint.name}column_offset_${i} {
  margin-left: ${this.percentage(i, columns)};
}`,
        columns
      ),
      breakpoints
    );
  }

  createColumnSizes (columns: number = variables.columns, breakpoints = variables.breakpoints) {
    return this.forBreakpoints(
      (breakpoint) => {
        const sizes = this.test(
          (i) => `.${breakpoint.name}column_size_${i + 1} {
  flex: 0 0 ${this.percentage(i + 1, columns)};
  max-width: ${this.percentage(i + 1, columns)};
}`,
          columns
        );

        return `.${breakpoint.name}column_size_\\# {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
}
.${breakpoint.name}column_size_width {
  flex: 0 0 auto;
  width: auto;
}
${sizes}`;
      },
      breakpoints
    );
  }

  createContainer () {
    return `.container {
  max-width: 75rem;
}`;
  }

  css (columns = variables.columns, breakpoints = variables.breakpoints) {
    return `${this.createColumn()}
${this.createColumnOffsets(columns, breakpoints)}
${this.createColumnSizes(columns, breakpoints)}
${this.createContainer()}`;
  }
}

export default Grid;
