# One-Line Laugh-Off — v1

[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/funtoons/one-line-laugh-off-v1/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/funtoons/one-line-laugh-off-v1/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

Entry for the [One-Line Laugh-Off](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
bounty on make.fun: a program that writes exactly one funny line.

## How it works

`main.ts` (Node 22, stdlib only) writes a single original joke line to
`/output/entry.txt`. It is fully deterministic and offline: no randomness,
no network, no timestamps — it only writes the line that was chosen.

## The line

> My therapist said I need closure, so I blocked her.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
