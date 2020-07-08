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
            expression.replaceWith(t.callExpression(cloneNode(state.decodeClassNameIdentifier), expression.get('elements').map((element) => cloneNode(element.node))));

            state.$ = true;
          }
        }

        if (value.isStringLiteral()) {
          value.replaceWith(t.JSXExpressionContainer(t.callExpression(cloneNode(state.decodeClassNameIdentifier), [ t.stringLiteral(value.node.value), ])));

          state.$ = true;
        }
      },
      Program: {
        enter (path, state) {
          state.decodeClassNameIdentifier = path.scope.generateUidIdentifier('decodeClassName');
        },
        exit (path, state) {
          if (state.$) {
            path.node.body.unshift(t.importDeclaration([ t.importDefaultSpecifier(state.decodeClassNameIdentifier), ], t.stringLiteral('@redredsk/design/private/helpers/decodeClassName')));
          }
        },
      },
    },
  };
};
