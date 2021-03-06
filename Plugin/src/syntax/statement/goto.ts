import { ExpressionNode, StatementNode, SyntaxNode } from '../syntaxNode';
import { AttributeListNode } from '../declaration/attribute';
import { SyntaxToken } from '../syntaxToken';
import { doc, Printer } from 'prettier';
import concat = doc.builders.concat;
import {
  printAttributeLists,
  printLeadingNewLine,
} from '../../helpers/printerHelpers';

export type GotoStatementNode = {
  attributeLists: Array<AttributeListNode>;
  caseOrDefaultKeyword: SyntaxToken;
  expression: ExpressionNode | null;
  gotoKeyword: SyntaxToken;
  semicolonToken: SyntaxToken;
} & StatementNode;

export const gotoStatementPrinter: Printer<GotoStatementNode>['print'] = (
  path,
  _,
  print
) => {
  const { caseOrDefaultKeyword } = path.getValue();

  return concat([
    printLeadingNewLine(path),
    printAttributeLists(path, print),
    path.call(print, 'gotoKeyword'),
    ' ',
    ['default', ''].includes(caseOrDefaultKeyword.text)
      ? path.call(print, 'caseOrDefaultKeyword')
      : concat([path.call(print, 'caseOrDefaultKeyword'), ' ']),
    path.call(print, 'expression'),
    path.call(print, 'semicolonToken'),
  ]);
};
