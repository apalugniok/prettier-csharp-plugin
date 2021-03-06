﻿import { code, formatCSharpWithPrettier } from '../helpers/testHelpers';

describe('Member Access Expression', () => {
  it('should format a member access expression', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          foo.Bar;
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              foo.Bar;
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format chained member access expressions', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          foo.Bar.Foo();
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              foo.Bar.Foo();
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format a chained accesses using new lines ', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          foo.PropertyA.PropertyB.PropertyA.PropertyA.PropertyB.PropertyA.PropertyA.PropertyB.PropertyA.PropertyA.PropertyB.PropertyA;
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              foo
                  .PropertyA
                  .PropertyB
                  .PropertyA
                  .PropertyA
                  .PropertyB
                  .PropertyA
                  .PropertyA
                  .PropertyB
                  .PropertyA
                  .PropertyA
                  .PropertyB
                  .PropertyA;
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format a chained optional and normal accesses using new lines ', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          foo.PropertyA.PropertyB?.PropertyA?.PropertyA.PropertyB?.PropertyA.PropertyA.PropertyB.PropertyA?.PropertyA?.PropertyB?.PropertyA;
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              foo
                  .PropertyA
                  .PropertyB
                  ?.PropertyA
                  ?.PropertyA
                  .PropertyB
                  ?.PropertyA
                  .PropertyA
                  .PropertyB
                  .PropertyA
                  ?.PropertyA
                  ?.PropertyB
                  ?.PropertyA;
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format indent the invocation on an invoked member expression', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          foo.Bar.Foo(longLongLongLongLongArgument1, longLongLongLongLongArgument2, 
          longLongLongLongLongArgument3,longLongLongLongLongArgument4, longLongLongLongLongArgument5);
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              foo
                  .Bar
                  .Foo(
                      longLongLongLongLongArgument1,
                      longLongLongLongLongArgument2,
                      longLongLongLongLongArgument3,
                      longLongLongLongLongArgument4,
                      longLongLongLongLongArgument5
                  );
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });
});
