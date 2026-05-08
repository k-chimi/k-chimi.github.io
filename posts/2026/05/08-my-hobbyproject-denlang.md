---
title: My hobby project Denlang
description: In 2026/05/08, I am still working on my hobby project, It evaluates formulas with arbitrary precision.
---

# My hobby project Denlang

I spent [Golden Week](https://en.wikipedia.org/wiki/Golden_Week_(Japan)) working on my hobby project.

<small>
🧐 I just realized Golden Week isn't native english word, Wow.
</small>

Why? Because I needed a calculator like Android's.

As for why I got interested in Android's calculator, I read this article at some time.

https://gigazine.net/gsc_news/en/20250217-android-calclator-app/

But, I didn't fully understand it and I just tried it.

Firstly, I thought about representing integer as natural number and calculation one.

`0 .. n` is inserted to the calculation tree as uint64, Minus values is represented as `0 - n` in the tree.

Subtraction is represented as the sum of these nodes. Wow, my calculator is going well.

But, How do I calculate a number greater than `2 ^ 64-1`.

Then, I thought about making new node to calculate overflowed values. 

`18446744073709551615 + 1` represented to `18446744073709551615 + 1` and represent it adds 1 to `18446744073709551615 + 2`.

And, Subtractions can represent by similar procedure.

Secondly, I thought how to calculate a fraction. Adds fraction represented `(a/b) + (c/d)` is same as `(ad + bc) / bd`.

Therefore, I should implement multiply to adds fraction and I'll probably have implemented it by the time I finish writing this article.

[Denlang is here in `k-chimi/denlang`](https://github.com/k-chimi/denlang) <sup>(JP)</sup> .

To execute repl.

```sh
go run ./cmd/den
```

Example.

```
$ go run ./cmd/den
>>> 1 + 1
2
>>> 1 + 3
4
>>> 1 - 10
-9
>>> 10 * 10
100
>>> 10 / 2
5
>>> 10 / 2 + 10 / 2
10
>>> 2 / 3 + 1 / 3
1
```
