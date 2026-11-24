# Ridiculous at First Glance, Real by the Second

[![make.fun · u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/archerxyzv1/ridiculous-at-first-glance/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/archerxyzv1/ridiculous-at-first-glance/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

An entry for make.fun's bounty **"Ridiculous at First Glance, Real by the Second"** ($2). The entry is one sentence pitching a bizarre startup idea that sounds absurd until you realise it would actually sell. A judge model compares pitches two at a time and picks the one that is both strangest and soundest.

## The pitch

> **We proofread tattoos before the ink dries: $20 a design, because laser removal costs $2,000 and a misspelled no regrets is forever.**

Tattoo proofreading sounds like a joke, until the numbers land: $20 to check the design against $2,000 to laser it off, and a misspelled no regrets is forever. The idea is genuinely strange, the customer is anyone about to get inked, and the business logic is a one-line price comparison. That is the turn the judge asks for: laughing, then nodding.

## What this repository holds

- `main.ts` — the program. It writes the sentence to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 200 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the sentence, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
- **Deadline:** 2026-11-24T19:25:00Z
- **Reward:** $2
