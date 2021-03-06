﻿import { doc, Printer } from 'prettier';
import { DeclarationNode, NameNode, SyntaxNode } from '../syntaxNode';
import concat = doc.builders.concat;
import hardline = doc.builders.hardline;
import indent = doc.builders.indent;
import join = doc.builders.join;
import Doc = doc.builders.Doc;
import { ExternAliasDirectiveNode, UsingDirectiveNode } from '../directive';
import { SyntaxToken } from '../syntaxToken';
import { AttributeListNode } from './attribute';
import { printLeadingNewLine } from '../../helpers/printerHelpers';

export type NamespaceDeclarationNode = {
  attributeLists: Array<AttributeListNode>; // Even though NamespaceDeclarationSyntax has this property attributes cannot be applied to namespaces
  closeBraceToken: SyntaxToken;
  externs: Array<ExternAliasDirectiveNode>;
  members: Array<DeclarationNode>;
  modifiers: Array<SyntaxToken>; // Even though NamespaceDeclarationSyntax has this property modifiers cannot be applies to namespaces
  name: NameNode;
  namespaceKeyword: SyntaxToken;
  openBraceToken: SyntaxToken;
  semicolonToken: SyntaxToken; // Optional trailing semicolon conventionally omitted
  usings: Array<UsingDirectiveNode>;
} & DeclarationNode;

export const namespaceDeclarationPrinter: Printer<NamespaceDeclarationNode>['print'] = (
  path,
  _,
  print
) => {
  const {
    usings,
    externs,
    members,
  }: NamespaceDeclarationNode = path.getValue();

  const body: Array<Doc> = [];

  if (externs.length !== 0) {
    body.push(hardline, join(hardline, path.map(print, 'externs')));
  }

  if (usings.length !== 0) {
    body.push(hardline, join(hardline, path.map(print, 'usings')));
  }

  if (members.length !== 0) {
    body.push(hardline, join(hardline, path.map(print, 'members')));
  }

  return concat([
    printLeadingNewLine(path),
    path.call(print, 'namespaceKeyword'),
    ' ',
    path.call(print, 'name'),
    hardline,
    path.call(print, 'openBraceToken'),
    indent(concat(body)),
    hardline,
    path.call(print, 'closeBraceToken'),
  ]);
};
