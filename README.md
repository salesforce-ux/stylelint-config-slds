# stylelint-config-slds [![NPM version](https://img.shields.io/npm/v/stylelint-config-slds.svg)](https://www.npmjs.org/package/stylelint-config-slds) [![Build Status](https://travis-ci.org/salesforce-ux/stylelint-config-slds.svg?branch=master)](https://travis-ci.org/salesforce-ux/stylelint-config-slds) [![Greenkeeper badge](https://badges.greenkeeper.io/salesforce-ux/stylelint-config-slds.svg)](https://greenkeeper.io/)

The [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) shareable config for stylelint.

Use it as is or as a foundation for your own config.

## Example

```scss
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

```

View examples of valid and invalid SCSS syntax in the `__tests__/__fixtures__` folder.

**[View examples](https://github.com/salesforce-ux/stylelint-config-slds/tree/master/__tests__/__fixtures__)**

To see the rules that this config uses, please read [the config itself](https://github.com/salesforce-ux/stylelint-config-slds/blob/master/stylelint.config.js).

## Installation

```bash
npm install stylelint stylelint-config-slds --save-dev
```

## Usage

### 1. Create a `.stylelintrc` file at the root of your project:

```json
{
  "extends": "stylelint-config-slds"
}
```

There are [multiple ways to configure stylelint](https://stylelint.io/user-guide/configuration/) that may work better for you.

### 2. Run stylelint

1. From the CLI:
  1. `npm install -g stylelint`
  1. `stylelint ./**/*.scss`
1. As an npm script:
  1. In `package.json`’s `scripts` section, add `"lint-scss": "stylelint ./**/*.scss"`
  1. Run `npm run lint-scss`
1. As a Gulp plugin: follow [these instructions](https://github.com/olegskl/gulp-stylelint)

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule, change the `property-no-unknown` rule to use its `ignoreAtRules` option and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```
