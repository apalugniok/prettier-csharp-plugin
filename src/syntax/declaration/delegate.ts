﻿import { AttributeListNode } from './attribute';
import { SyntaxToken } from '../syntaxToken';
import { TypeNode } from '../syntaxNode';
import { ParameterListNode, TypeParameterListNode } from './parameter';
import { TypeParameterConstraintClauseNode } from './typeParameterConstraint';
import { doc, Printer } from 'prettier';
import concat = doc.builders.concat;
import {
  printAttributeLists,
  printModifiers,
} from '../../helpers/printerHelpers';
import group = doc.builders.group;
import indent = doc.builders.indent;
import line = doc.builders.line;
import join = doc.builders.join;

export type DelegateDeclarationNode = {
  arity: number;
  attributeLists: Array<AttributeListNode>;
  constraintClauses: Array<TypeParameterConstraintClauseNode>;
  delegateKeyword: SyntaxToken;
  identifier: SyntaxToken;
  modifiers: Array<SyntaxToken>;
  parameterList: ParameterListNode;
  returnType: TypeNode;
  semicolonToken: SyntaxToken;
  typeParameterList: TypeParameterListNode;
};

export const delegateDeclarationPrinter: Printer['print'] = (
  path,
  _,
  print
) => {
  const {
    constraintClauses,
    identifier,
    modifiers,
  }: DelegateDeclarationNode = path.getValue();

  return concat([
    printAttributeLists(path, print),
    printModifiers(modifiers),
    'delegate ',
    path.call(print, 'returnType'),
    ' ',
    identifier.text,
    path.call(print, 'typeParameterList'),
    path.call(print, 'parameterList'),
    constraintClauses.length !== 0
      ? group(
          indent(
            concat([line, join(line, path.map(print, 'constraintClauses'))])
          )
        )
      : '',
    ';',
  ]);
};