// Copyright (c) 2017-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

"use strict"

module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "ignoreFiles": [
    "node_modules",
    "app_modules",
    "ui/vendor/**",
    "site/assets/styles/_vendor/**",
  ],
  "defaultSeverity": "warning",
  "rules": {
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-same-name-blockless",
          "blockless-after-blockless",
          "first-nested",
        ],
        ignore: [
          "after-comment",
        ],
      },
    ],
    "at-rule-blacklist": [
      "extend",
    ],
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-space-before": "always",
    "block-closing-brace-empty-line-before": "never",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": [
      "always",
      {
        except: [
          "first-nested",
        ],
        ignore: [
          "after-comment",
          "stylelint-commands",
        ],
      },
    ],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-value-blacklist": {
      "/^transition/": [
        "/all/",
      ],
      "/^border/": [
        "none",
      ],
    },
    "font-family-no-duplicate-names": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "indentation": [
      2,
      {
        ignore: [
          "inside-parens",
          "param",
          "value",
        ],
      },
    ],
    "length-zero-no-unit": true,
    "max-nesting-depth": 3,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "rule-empty-line-before": [
      "always",
      {
        except: [
          "after-single-line-comment",
        ],
      },
    ],
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": [
      "^slds-[a-z0-9_-]+$",
      {
        severity: "error",
        resolveNestedSelectors: true,
      },
    ],
    "selector-list-comma-newline-after": "always",
    "selector-no-id": [
      true,
      {
        severity: "error",
      },
    ],
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "unit-no-unknown": true,
    "value-keyword-case": [
      "lower",
      {
        "ignoreKeywords": [
          "Consolas",
          "Monaco",
        ],
      },
    ],
    "at-rule-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": [
      "scss",
      "sass",
    ],
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/at-function-pattern": [
      "^[a-z0-9-]+$",
      {
        severity: "error",
      },
    ],
    "scss/at-mixin-pattern": [
      "^[a-z0-9-]+$",
      {
        severity: "error",
      },
    ],
    "scss/dollar-variable-pattern": [
      "^[a-z0-9-]+$",
      {
        severity: "error",
      },
    ],
    "scss/operator-no-unspaced": true,
  },
}
