module.exports = ({ types: t, }) => {
  const cloneNode = t.cloneNode || t.cloneDeep;

  return {
    visitor: {
      JSXAttribute (path, state) {
        if (path.node.name.name !== 'className') {
          return;
        }

        const value = path.get('value');

        if (value.isJSXExpressionContainer()) {
          const expression = value.get('expression');

          if (expression.isArrayExpression()) {
            expression.replaceWith(t.callExpression(cloneNode(state.createClassNameIdentifier), expression.get('elements').map((element) => cloneNode(element.node))));

            state.$ = true;
          }
        }

        if (value.isStringLiteral()) {
          value.replaceWith(t.JSXExpressionContainer(t.callExpression(cloneNode(state.createClassNameIdentifier), [ t.stringLiteral(value.node.value), ])));

          state.$ = true;
        }
      },
      Program: {
        enter (path, state) {
          state.createClassNameIdentifier = path.scope.generateUidIdentifier('createClassName');
        },
        exit (path, state) {
          if (state.$) {
            path.node.body.unshift(t.importDeclaration([ t.importSpecifier(state.createClassNameIdentifier, t.identifier('createClassName')), ], t.stringLiteral('@redredsk/design/private/helpers/createClassName')));
          }
        },
      },
    },
  };
};
