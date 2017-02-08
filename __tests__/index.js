"use strict"
/* eslint-disable no-console */
/* eslint-env jest, jasmine */

const config = require("../")
const stylelint = require("stylelint")

const validCss = `
.slds-with-number-1-in-it {
  width: 100%;
}

.slds-foo {
  width: 5em;

  .slds-bar {
    margin: 0;
    border: 0;
  }
}
`

const invalidCss = `
#id {
  width: 100%;
}
`

describe("flags no warnings with valid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
      syntax: "scss",
    })
  })

  it("did not error", () => {
    return result.then(data => (
      expect(data.errored).toBeFalsy()
    ))
  })

  it("flags no deprecations", () => {
    return result.then(data => {
      if (data.results[0].deprecations) {
        data.results[0].deprecations.forEach(deprecation =>
          console.log(deprecation.text)
        )
      }

      expect(data.results[0].deprecations.length).toBe(0)
    })
  })

  it("flags no invalidOptionWarnings", () => {
    return result.then(data => {
      if (data.results[0].invalidOptionWarnings.length) {
        data.results[0].invalidOptionWarnings.forEach(invalidOption =>
          console.log(invalidOption.text)
        )
      }

      expect(data.results[0].invalidOptionWarnings.length).toBe(0)
    })
  })

  it("flags no warnings", () => {
    return result.then(data => {
      if (data.results[0].warnings.length) {
        data.results[0].warnings.forEach(warning =>
          console.log(warning.text)
        )
      }

      expect(data.results[0].warnings.length).toBe(0)
    })
  })
})

describe("flags warnings with invalid css", () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
      syntax: "scss",
    })
  })

  it("did error", () => {
    return result.then(data => (
      expect(data.errored).toBeTruthy()
    ))
  })

  it("flags one warning", () => {
    return result.then(data => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  })

  it("correct warning text", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].text).toBe("Unexpected id selector (selector-no-id)")
    ))
  })

  it("correct rule flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].rule).toBe("selector-no-id")
    ))
  })

  it("correct severity flagged", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].severity).toBe("error")
    ))
  })

  it("correct line number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].line).toBe(2)
    ))
  })

  it("correct column number", () => {
    return result.then(data => (
      expect(data.results[0].warnings[0].column).toBe(1)
    ))
  })
})

// const lint = (code) =>
//   stylelint.lint({
//     code,
//     config,
//     syntax: "scss",
//   })

const lintFile = (pattern) =>
  stylelint.lint({
    files: `./__tests__/__fixtures__/${pattern}.scss`,
    config,
    syntax: "scss",
  })

describe("names", () => {
  it("should error on wrong selector names", () =>
    lintFile("selector-naming")
      .then(data => {
        expect(data.errored).toBeTruthy()
        expect(data.results[0].warnings.length).toBe(7)
      }))

  it("closes braces properly", () =>
    lintFile("rule-braces")
      .then(data =>
        expect(data.results[0].warnings.length).toBe(6)))

  it("spaces rules with one new line", () =>
    lintFile("rule-spacing")
      .then(data =>
        expect(data.results[0].warnings.length).toBe(10)))

  it("complains about bad indentation", () =>
    lintFile("indentation")
      .then(data =>
        expect(data.results[0].warnings.length).toBe(5)))
  it("complains about bad values", () =>
    lintFile("values")
      .then(data =>
        expect(data.results[0].warnings.length).toBe(2)))
  it("complains about extends", () =>
    lintFile("extend")
      .then(data => {
        expect(data.errored).toBeTruthy()
        expect(data.results[0].warnings.length).toBe(1)
      }))
})
