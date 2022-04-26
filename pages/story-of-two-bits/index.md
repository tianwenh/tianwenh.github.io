---
title: Story of two bits
date: 2022-04-26
subtitle:
tags:
---

> Check out [type-config wiki](https://wiki.huatianwen.com/typescript/type-config) for a more detailed technical breakdown.

Among countless other complex things, let's discuss a simple case: the relation between two binary bits.

## State and combination

| #bit | #State | #Combination of state |
| ---- | ------ | --------------------- |
| 1    | 2      | 3(2^2-1)              |
| 2    | 4(2^2) | 15(2^4-1)             |

A bit by itself as commonly defined can either be `0` or `1`. Cardinality of state is 2.

Two bits together can be: `00`, `01`, `10`, `11`. Cardinality of state is `2^2 = 4`.

Combinations of state are combinations with all different sample number. Cardinality of single bit is `C(2,2)+C(2,1)`, or `2^2-C(2,0)`. Cardinality of 2 bits is `C(4,4)+C(4,3)+C(4,2)+C(4,1)` or `2^4-C(4,0)`.

Math works aside, things are clearly getting more complex when it goes either vertically (number of bits) or horizontally (composition of primitives).

## Combination pattern

How would you give names to that 3 combinations?

### 1. `1` or `0`

A bit with result.

### 1. `1` `0`

A bit with possibilities

## More combination pattern

How would you give stories to that 15 combinations?

Here is my try:

### 1. `11 10 01 00`

Roommates

- `a`: independent
- `b`: independent

They have their own lifes... It won't change a thing if they split.

### 2. `11` or `10` or `01` or `00`

Commited couple

- `a`: fixed
- `b`: fixed

They accepted the offer...

### 3. `11 10` or `11 01` or `10 00` or `01 00`

Not yet committed

- `a`: independent
- `b`: fixed

Still waiting for an anwser...

### 4. `10 01` or `11 00`

Someone needs a life

- `a`: independent
- `b`: dependent on `a`
  - `a`
  - !`a`

It is not yet clear who is that someone tho...

### 5. `11 10 00` or `11 01 00` or `11 10 01` or `10 01 00`

Too much conditions

- `a`: independent
- `b`:
  - independent if `a` is ..
  - dependent if `a` is ..

While still negotiating, it is likely to break.

## My TL;DR

- Adding verticals/dimensions/... is exponential;
- Patterns: no such thing as unique;
- "Dependency management is hard";
- Generalization without specialization is false: if you read [type-config wiki](https://wiki.huatianwen.com/typescript/type-config), there are just too many missing details and reasoning process here;
