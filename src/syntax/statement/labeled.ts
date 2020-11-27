﻿import { StatementNode, SyntaxNode } from '../syntaxNode';
import { AttributeListNode } from '../declaration/attribute';
import { SyntaxToken } from '../syntaxToken';
import { doc, Printer } from 'prettier';
import concat = doc.builders.concat;
import { printAttributeLists } from '../../helpers/printerHelpers';
import hardline = doc.builders.hardline;
import indent = doc.builders.indent;

export type LabeledStatementNode = {
  attributeLists: Array<AttributeListNode>;
  colonToken: SyntaxToken;
  identifier: SyntaxToken;
  statement: StatementNode;
} & SyntaxNode;

export const labeledStatementPrinter: Printer['print'] = (path, _, print) => {
  const { identifier }: LabeledStatementNode = path.getValue();

  return concat([
    printAttributeLists(path, print),
    identifier.text,
    ':',
    indent(concat([hardline, path.call(print, 'statement')])),
  ]);
};