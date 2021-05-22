---
id: Setup-ESLint-and-Prettier-in-VSCode
title: Setup ESLint and Prettier in VSCode
description: "A Guide on setting up ESLint and Prettier in VSCdoe for better code quality."
---

---

## Step 1

Install two extentions, **_ESLint_** and **_Prettier_**

### ESLint

![eslint](/img/docimages/CodeQuality/eslint.png)

### Prettier

![prettier](/img/docimages/CodeQuality/prettier.png)

## Step 2

Install the following npm packages that is required to make all of this work.

```batch
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
npx install-peerdeps --dev eslint-config-airbnb
```

## Step 3

Create a new file in the root of your project called **_.prettierrc_**, this is where prettier configs can be set.
I only have one setting in this file and that is my preference for single quotes instead of double quotes.

```json
{
  "singleQuote": true
}
```

# Step 4

Create a new file in the root of your project called **_.eslintrc.json_**, this is where eslint configs can be set.

This is an example of my config that applies to both the browser and Node.

```json
{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "class-methods-use-this": "warn",
    "node/no-unpublished-require": "off"
  }
}
```

Alternatively, if you don't want to create the eslint file manually you can do it via the cli.

```batch
npm i -g eslint
eslint --init
```

And that should be it...
