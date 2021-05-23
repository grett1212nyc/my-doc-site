---
id: Markdown-Cheatsheet
title: Markdown-Cheatsheet
description: Writing plain text with markdown syntax
---

---

## Headers

```
# Header 1
## Header 2
### Header 3
#### Header 4 ####
##### Header 5 #####
###### Header 6 ######
```

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Emphasis

```
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_

## Inline Links

```
A [link](http://example.com "Title")
```

Processed

A [link](http://example.com "Title")

## Referenced Links

```
Some text with [a link][1] and
another [link][2].
```

Processed

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"

Some text with [a link][1] and
another [link][2]

##Inline Images

```
![Alt](images/cover/git.jpg)
```

Processed

![Alt](/img/docimages/Markdown/git.jpg)

## Ordered list

```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

## Unordered list

```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

## Blockquotes

As I said:

```
> We're living the future so
> the present is our past.
```

> We're living the future so
> the present is our past.

## Inline code

```
I think you should use an
`<addr>` element here instead.
```

I think you should use an
`<addr>` element here instead.

## Task lists

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] @mentions, #refs, [links](http://links), **formatting**, and `<del>`tags`</del>` supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

## Strikethrough

```
~~Strikethrough~~
```

~~Strikethrough~~
