---
id: JavaScript-Spread-and-Rest-Operator
title: JavaScript - Spread and Rest Operator
description: "JavaScript - Spread and Rest Operator examples"
---

---

## Rest

Rest operator ... (three dots) allows us to extract Object properties that are not already extracted.  
You can use rest to help extract only properties you want.

```javascript
// Extract FirstName and age
// and store the rest of the items in 'remaining' variable
const { firstName, age, ...remaining } = {
  firstName: "Jean",
  lastName: "Smith",
  age: 20,
  height: "5.10",
  race: "martian",
};

console.log(firstName); // Jean

console.log(age); // 20

console.log(remaining); // { lastName: 'Smith', height: '5.10', race: 'martian' }
```

## Spread

Spread properties also look just like rest properties with three dots ...but the difference is that you use spread to create (restructure) new objects.

> **_The spread operator is used in the right side of the equals sign. The rest are used in the left-side of the equals sign._**

```javascript
const defaultUser = {
  FirstName: "Jean",
  LastName: "Snyman",
  Age: 35,
};

const additionalUserProps = {
  Email: "jeans@gmail.com",
  Age: 40,
};

//Merge two objects using object spread
const user2 = { ...defaultUser, ...additionalUserProps };

console.log(user2);
// {
//   FirstName: 'Jean',
//   LastName: 'Snyman',
//   Age: 40,
//
```
