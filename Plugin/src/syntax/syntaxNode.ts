﻿export type SyntaxNodeType =
  | AttributeNodeTypes
  | ExpressionNodeType
  | DeclarationNodeType
  | StatementNodeType
  | PatternNodeType
  | QueryClauseNodeType
  | 'CompilationUnit'
  | 'UsingDirective'
  | 'TypeArgumentList'
  | 'NameEquals'
  | 'NameColon'
  | 'ExternAliasDirective'
  | 'TypeParameterList'
  | 'TypeParameter'
  | 'Parameter'
  | 'ParameterList'
  | 'BracketedParameterList'
  | 'BaseList'
  | 'SimpleBaseType'
  | 'TypeParameterConstraintClause'
  | 'ConstructorConstraint'
  | 'ClassOrStructConstraint'
  | 'TypeConstraint'
  | 'VariableDeclarator'
  | 'BracketedArgumentList'
  | 'Argument'
  | 'EqualsValueClause'
  | 'AccessorList'
  | 'AccessorDeclaration'
  | 'ExplicitInterfaceSpecifier'
  | 'ArrowExpressionClause'
  | 'ArgumentList'
  | 'ConstructorInitializer'
  | 'ElseClause'
  | 'CatchClause'
  | 'CatchDeclaration'
  | 'CatchFilterClause'
  | 'FinallyClause'
  | 'InterpolatedStringText'
  | 'Interpolation'
  | 'InterpolationAlignmentClause'
  | 'InterpolationFormatClause'
  | 'SingleVariableDesignation'
  | 'DiscardDesignation'
  | 'ParenthesizedVariableDesignation'
  | 'ArrayRankSpecifier'
  | 'OmittedArraySizeExpression'
  | 'PositionalPatternClause'
  | 'Subpattern'
  | 'PropertyPatternClause'
  | 'QueryBody'
  | 'QueryContinuation'
  | 'JoinIntoClause'
  | 'Ordering'
  | 'SelectClause'
  | 'GroupClause'
  | 'TupleElement'
  | 'SwitchExpressionArm'
  | 'WhenClause'
  | 'AnonymousObjectMemberDeclarator'
  | 'SwitchSection'
  | 'CasePatternSwitchLabel'
  | 'CaseSwitchLabel'
  | 'DefaultSwitchLabel';

export type DeclarationNodeType =
  | 'NamespaceDeclaration'
  | 'ClassDeclaration'
  | 'EnumDeclaration'
  | 'EnumMemberDeclaration'
  | 'VariableDeclaration'
  | 'InterfaceDeclaration'
  | 'FieldDeclaration'
  | 'EventFieldDeclaration'
  | 'PropertyDeclaration'
  | 'EventDeclaration'
  | 'IndexerDeclaration'
  | 'StructDeclaration'
  | 'MethodDeclaration'
  | 'ConstructorDeclaration'
  | 'DestructorDeclaration'
  | 'OperatorDeclaration'
  | 'ConversionOperatorDeclaration'
  | 'DelegateDeclaration'
  | 'GlobalStatement'
  | 'RecordDeclaration';

export type ExpressionNodeType =
  | TypeNodeType
  | 'LiteralExpression'
  | 'ObjectCreationExpression'
  | 'InitializerExpression'
  | 'AssignmentExpression'
  | 'InvocationExpression'
  | 'MemberAccessExpression'
  | 'ParenthesizedExpression'
  | 'ThisExpression'
  | 'BaseExpression'
  | 'StackAllocArrayCreationExpression'
  | 'ImplicitStackAllocArrayCreationExpression'
  | 'InterpolatedStringExpression'
  | 'DeclarationExpression'
  | 'IsPatternExpression'
  | 'CastExpression'
  | 'ThrowExpression'
  | 'TupleExpression'
  | 'AnonymousMethodExpression'
  | 'SimpleLambdaExpression'
  | 'ParenthesizedLambdaExpression'
  | 'QueryExpression'
  | 'BinaryExpression'
  | 'PrefixUnaryExpression'
  | 'PostfixUnaryExpression'
  | 'MakeRefExpression'
  | 'RefTypeExpression'
  | 'RefValueExpression'
  | 'CheckedExpression'
  | 'ConditionalAccessExpression'
  | 'MemberBindingExpression'
  | 'DefaultExpression'
  | 'TypeOfExpression'
  | 'ElementBindingExpression'
  | 'SizeOfExpression'
  | 'SwitchExpression'
  | 'ElementAccessExpression'
  | 'RangeExpression'
  | 'ImplicitElementAccess'
  | 'AnonymousObjectCreationExpression'
  | 'ArrayCreationExpression'
  | 'ImplicitArrayCreationExpression'
  | 'ConditionalExpression'
  | 'AwaitExpression'
  | 'ImplicitObjectCreationExpression';

export type TypeNodeType =
  | NameNodeType
  | 'PredefinedType'
  | 'ArrayType'
  | 'RefType'
  | 'PointerType'
  | 'NullableType'
  | 'TupleType'
  | 'OmittedTypeArgument';

export type StatementNodeType =
  | 'Block'
  | 'IfStatement'
  | 'TryStatement'
  | 'LocalDeclarationStatement'
  | 'ExpressionStatement'
  | 'LabeledStatement'
  | 'UnsafeStatement'
  | 'GotoStatement'
  | 'LockStatement'
  | 'BreakStatement'
  | 'ContinueStatement'
  | 'ReturnStatement'
  | 'SwitchStatement'
  | 'LocalFunctionStatement'
  | 'ThrowStatement'
  | 'YieldStatement'
  | 'WhileStatement'
  | 'DoStatement'
  | 'ForStatement'
  | 'ForEachStatement'
  | 'ForEachVariableStatement'
  | 'UsingStatement'
  | 'FixedStatement'
  | 'EmptyStatement'
  | 'CheckedStatement';

export const nameNodeTypes = [
  'AliasQualifiedName',
  'QualifiedName',
  'GenericName',
  'IdentifierName',
] as const;

export type NameNodeType = typeof nameNodeTypes[number];

export type PatternNodeType =
  | 'DiscardPattern'
  | 'DeclarationPattern'
  | 'VarPattern'
  | 'RecursivePattern'
  | 'ConstantPattern'
  | 'BinaryPattern'
  | 'ParenthesizedPattern'
  | 'RelationalPattern'
  | 'TypePattern'
  | 'UnaryPattern';

export type AttributeNodeTypes =
  | 'Attribute'
  | 'AttributeList'
  | 'AttributeArgumentList'
  | 'AttributeArgument'
  | 'AttributeTargetSpecifier';

export type QueryClauseNodeType =
  | 'FromClause'
  | 'LetClause'
  | 'JoinClause'
  | 'WhereClause'
  | 'OrderByClause';

export type SyntaxNode = {
  hasLeadingNewLine: boolean;
  nodeType: SyntaxNodeType;
  start: number;
  end: number;
};

export type DeclarationNode = {
  nodeType: DeclarationNodeType;
} & SyntaxNode;

export type ExpressionNode = {
  nodeType: ExpressionNodeType;
} & SyntaxNode;

export type TypeNode = {
  nodeType: TypeNodeType;
} & SyntaxNode;

export type StatementNode = {
  nodeType: StatementNodeType;
} & SyntaxNode;

export type NameNode = {
  nodeType: NameNodeType;
} & TypeNodeType;

export type PatternNode = {
  nodeType: PatternNodeType;
} & SyntaxNode;

export type QueryClauseNode = {
  nodeType: QueryClauseNodeType;
} & SyntaxNode;
