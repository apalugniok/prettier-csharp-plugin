﻿import { SyntaxToken } from '../syntaxToken';
import { ExpressionNode, SyntaxNode, TypeNode } from '../syntaxNode';
import { ArgumentListNode } from './argument';
import { doc, Printer } from 'prettier';
import concat = doc.builders.concat;
import { InitializerExpressionNode } from './initializer';
import { NameEqualsNode } from './nameEquals';
import indent = doc.builders.indent;
import line = doc.builders.line;
import ifBreak = doc.builders.ifBreak;
import join = doc.builders.join;
import group = doc.builders.group;

export type ObjectCreationExpressionNode = {
  argumentList: ArgumentListNode | null;
  initializer: InitializerExpressionNode | null;
  newKeyword: SyntaxToken;
  type: TypeNode;
} & SyntaxNode;

export const objectCreationExpressionPrinter: Printer<ObjectCreationExpressionNode>['print'] = (
  path,
  _,
  print
) => {
  const { argumentList, initializer } = path.getValue();

  const shouldShowArgumentsList =
    (argumentList?.arguments?.length ?? 0) > 0 || initializer == null;

  return concat([
    path.call(print, 'newKeyword'),
    ' ',
    path.call(print, 'type'),
    shouldShowArgumentsList ? path.call(print, 'argumentList') : '',
    path.call(print, 'initializer'),
  ]);
};

export type ImplicitObjectCreationExpression = {
  argumentList: ArgumentListNode;
  initializer: InitializerExpressionNode;
  newKeyword: SyntaxToken;
  openParenToken: SyntaxToken;
  type: ExpressionNode;
} & SyntaxNode;

export const implicitObjectCreationExpressionPrinter: Printer<ImplicitObjectCreationExpression>['print'] = (
  path,
  _,
  print
) => {
  return concat([
    path.call(print, 'newKeyword'),
    path.call(print, 'argumentList'),
    path.call(print, 'initializer'),
  ]);
};

export type AnonymousObjectCreationExpressionSyntax = {
  closeBraceToken: SyntaxToken;
  newKeyword: SyntaxToken;
  openBraceToken: SyntaxToken;
  initializers: Array<InitializerExpressionNode> | null;
} & SyntaxNode;

export const anonymousObjectCreationExpressionPrinter: Printer<AnonymousObjectCreationExpressionSyntax>['print'] = (
  path,
  _,
  print
) => {
  const { initializers } = path.getValue();

  const objectCreationBody =
    initializers != null && initializers.length !== 0
      ? group(
          concat([
            line,
            path.call(print, 'openBraceToken'),
            indent(
              concat([
                line,
                join(concat([',', line]), path.map(print, 'initializers')),
              ])
            ),
            ifBreak(',', ''),
            line,
            path.call(print, 'closeBraceToken'),
          ])
        )
      : concat([
          ' ',
          path.call(print, 'openBraceToken'),
          ' ',
          path.call(print, 'closeBraceToken'),
        ]);

  return concat([path.call(print, 'newKeyword'), objectCreationBody]);
};

export type AnonymousObjectMemberDeclaratorSyntax = {
  expression: ExpressionNode;
  nameEquals: NameEqualsNode | null;
} & SyntaxNode;

export const anonymousObjectMemberDeclaratorSyntax: Printer<AnonymousObjectMemberDeclaratorSyntax>['print'] = (
  path,
  _,
  print
) => concat([path.call(print, 'nameEquals'), path.call(print, 'expression')]);
