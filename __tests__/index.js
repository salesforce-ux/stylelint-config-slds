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

  .slds-baz {
    background: 0;
  }
}

@media (min-width: 30em) {

  .slds-container {

    .slds-child {
      margin: 0;
      border: 0;
    }
  }
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
    return result.then((data) => expect(data.errored).toBeFalsy())
  })

  it("flags no deprecations", () => {
    return result.then((data) => {
      if (data.results[0].deprecations) {
        data.results[0].deprecations.forEach((deprecation) =>
          console.log(deprecation.text)
        )
      }

      expect(data.results[0].deprecations.length).toBe(0)
    })
  })

  it("flags no invalidOptionWarnings", () => {
    return result.then((data) => {
      if (data.results[0].invalidOptionWarnings.length) {
        data.results[0].invalidOptionWarnings.forEach((invalidOption) =>
          console.log(invalidOption.text)
        )
      }

      expect(data.results[0].invalidOptionWarnings.length).toBe(0)
    })
  })

  it("flags no warnings", () => {
    return result.then((data) => {
      if (data.results[0].warnings.length) {
        data.results[0].warnings.forEach((warning) =>
          console.log(warning.text)
        )
      }

      expect(data.results[0].warnings.length).toBe(0)
    })
  })
})

const lintFile = (pattern) =>
  stylelint.lint({
    files: `./__tests__/__fixtures__/${pattern}.scss`,
    config,
    syntax: "scss",
  })

describe("names", () => {
  it("selector-naming", () =>
    lintFile("selector-naming").then((data) => {
      expect(data.errored).toBeTruthy()
      expect(data.results[0].warnings.length).toBe(7)
    }))

  it("rule-braces", () =>
    lintFile("rule-braces").then((data) =>
      expect(data.results[0].warnings.length).toBe(6)
    ))

  it("rule-spacing", () =>
    lintFile("rule-spacing").then((data) =>
      expect(data.results[0].warnings.length).toBe(11)
    ))

  it("indentation", () =>
    lintFile("indentation").then((data) =>
      expect(data.results[0].warnings.length).toBe(5)
    ))
  it("values", () =>
    lintFile("values").then((data) =>
      expect(data.results[0].warnings.length).toBe(2)
    ))
  it("extend", () =>
    lintFile("extend").then((data) => {
      expect(data.errored).toBeTruthy()
      expect(data.results[0].warnings.length).toBe(1)
    }))
  it("pseudo-elements", () =>
    lintFile("pseudo-elements").then((data) => {
      expect(data.results[0].warnings.length).toBe(1)
    }))
})
