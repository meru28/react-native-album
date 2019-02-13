module.exports = {
    "parserOptions": {
        "sourceType": "module"
      },
      "plugins": [
        "jsx-a11y",
        "react"
    ],
    "extends": "rallycoding",
    "rules": {
      "jsx-a11y/no-noninteractive-element-interactions": 1,
      "jsx-a11y/click-events-have-key-events": 1,
      "jsx-a11y/label-has-for": 1,
      "jsx-a11y/alt-text": 1,
      "jsx-a11y/no-static-element-interactions": 1,
      "jsx-a11y/anchor-is-valid": 1,
      "jsx-a11y/no-redundant-roles": 1,
      "jsx-a11y/scope": 1,
      "jsx-a11y/interactive-supports-focus": 1
    }
};