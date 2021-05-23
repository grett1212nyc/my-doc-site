---
id: How-To-Clear-Floats
title: How To Clear Floats (Clearfix)
description: The form tag and all the input elements that goes with it
---

---

> If an element is taller than the element containing it, and it is floated, it will overflow outside of its container.

## Without clearfix

![clearfix](/img/docimages/CSS/clearfix_prob.jpg)

> Elements after a floating element will flow around it. Use the "clearfix" hack to fix the problem:

## With clearfix

![clearfix](/img/docimages/CSS/clearfix_solution.jpg)

> Apply the clearfix css to the parent element to fix this issue.

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```
