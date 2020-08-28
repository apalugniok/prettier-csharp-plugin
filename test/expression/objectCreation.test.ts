﻿const { code, formatCSharpWithPrettier } = require('../helpers/testHelpers');

describe('Object Creation Expression', () => {
  it('should format an object creation', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo();
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo();
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format an object creation with an initializer', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo { foo = 1 };
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo { foo = 1 };
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format an object creation with an initializer and remove an empty arguments list', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo() { foo = 1 };
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo { foo = 1 };
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format an object creation with arguments in the constructor and an initializer', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo(argA, argB) { foo = 1 };
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo(argA, argB) { foo = 1 };
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format an object creation with an initializer with multiple expressions using new lines', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo() { reallyLongFoo = 1, reallyLongBar = 2, reallyLongBaz = 4, reallyLongFez = 5 };
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo
              {
                  reallyLongFoo = 1,
                  reallyLongBar = 2,
                  reallyLongBaz = 4,
                  reallyLongFez = 5,
              };
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format an object creation with a constructor with multiple arguments and an initializer with multiple expressions using new lines', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
          var irrelevant = new Foo(reallyLongFoo, 
          reallyLongBar, reallyLongBaz, 
          reallyLongFez) { reallyLongFoo = 1, 
          reallyLongBar = 2, reallyLongBaz = 4, reallyLongFez = 5 };
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              var irrelevant = new Foo(
                  reallyLongFoo,
                  reallyLongBar,
                  reallyLongBaz,
                  reallyLongFez
              )
              {
                  reallyLongFoo = 1,
                  reallyLongBar = 2,
                  reallyLongBaz = 4,
                  reallyLongFez = 5,
              };
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });
});