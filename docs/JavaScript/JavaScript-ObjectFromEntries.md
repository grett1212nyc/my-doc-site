---
id: JavaScript-Object.fromEntries
title: JavaScript - Object.fromEntries()
description: "JavaScript - Object.fromEntries() Examples"
---

---

# Object.fromEntries()

The Object.fromEntries() function is intended to make it easy to convert a JavaScript Map into a JavaScript object.

```javascript
// { hello: 'world', foo: 'bar' }
Object.fromEntries(
  new Map([
    ["hello", "world"],
    ["foo", "bar"],
  ])
);
```

A neat side effect is you can convert an array of key/value pairs into a JavaScript object.

```javascript
// { hello: 'world', foo: 'bar' }
Object.fromEntries([
  ["hello", "world"],
  ["foo", "bar"],
]);
```
