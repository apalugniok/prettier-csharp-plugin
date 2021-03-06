﻿import { code, formatCSharpWithPrettier } from '../helpers/testHelpers';

describe('Empty Statement', () => {
  it('should format an emtpy statement', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant()
        {
          ;
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              ;
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });

  it('should format attributes', () => {
    const input = code`
      class Irrelevant {
        void Irrelevant() {
        [Foo, Bar]
              [Baz]
          ;
        }
      }
    `;
    const expectedFormattedCode = code`
      class Irrelevant
      {
          void Irrelevant()
          {
              [Foo, Bar]
              [Baz]
              ;
          }
      }
    `;

    const actualFormattedCode = formatCSharpWithPrettier(input);

    expect(actualFormattedCode).toEqual(expectedFormattedCode);
  });
});
