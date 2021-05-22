---
id: Node-Express-with-TypeScript
title: How to set up Express with TypeScript, eslint and prettier
description: Express with TypeScript, elsint and prettier
---

---

# How to set up Express with TypeScript and eslint\prettier

This is a quick guide on how to get up and running with Express and TypeScript. It also includes eslint and prettier to make your code even better.

Steps

1.  Create a new project folder and initialize a new project with npm.
    ```powershell
    npm init -y
    ```
2.  Install the following dependencies
    ```powershell
    npm i express
    npm i --save-dev typescript ts-node-dev @types/node @types/express
    npm i --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```
3.  Create a TypeScript config file by running the command,
    ```powershell
    tsc --init
    ```
    This will create a tsconfig.json file. Make sure you have atleast the following configuration in this file.
    ```powershell
    {
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": "./",
        "paths": {
        "*": ["node_modules/*"]
        }
    },
    "include": ["src/**/*"]
    }
    ```
4.  Create a src folder in the root of the project for all the ts files. Also add a server.ts file and the follwing code in it.

    ```javascript
    import express from "express";

    const app = express();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
    ```

5.  In the package.json file add the following script configuration.

    ```powershell
    "main": "dist/server.js",
    "scripts": {
        "build": "tsc",
        "dev": "ts-node-dev --poll src/server.ts"
    },
    ```

    If you now run npm run dev you should see the express server running on port 5000. And the TypeScript files will be compiled into the dist folder.

6.  Set up eslint and prettier. Run the following,

    ```powershell
    npx eslint --init

    Answer the questions as follows,
     To check syntax, find problems, and enforce code style
     JavaScript modules (import/export)
     None of these
     Does your project use TypeScript? » Yes
     Where does your code run? Node
     Use a popular style guide -> Airbnb: https://github.com/airbnb/javascript
     What format do you want your config file to be in? JavaScript
     Would you like to install them now with npm? Yes
    ```

    This will generate the .eslint.js file in the root of the project that looks like this.

    ```javascript
    module.exports = {
      env: {
        es2021: true,
        node: true,
      },
      extends: ["airbnb-base"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    };
    ```

    To include prettier for code formatting you need to add the prettier config to this file. It should look like this.

    ```javascript
    module.exports = {
      env: {
        es2021: true,
        node: true,
      },
      extends: ["airbnb-base", "prettier"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "prettier/prettier": [
          1,
          {
            trailingComma: "es5",
            singleQuote: true,
            semi: true,
          },
        ],
        "no-console": 0,
      },
    };
    ```

7.  It should format your code as expected. But, you may notice errors on double-quotes. Prettier should format your code according to ESLint configurations. But, there are some default options that Prettier does not override. To fix this add a prettier.config.js file in the root of the project with the following config.

```javascript
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
};
```

And that is it! This should get you up and running with Express and TypeScript.
