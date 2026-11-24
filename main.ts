// Ridiculous at First Glance, Real by the Second (Node 22, standard library only): it writes
// exactly one sentence, pitching a bizarre startup idea that sounds ridiculous until you realise it would actually sell, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PITCH =
  'We proofread tattoos before the ink dries: $20 a design, because laser removal costs $2,000 and a misspelled no regrets is forever.';

if (PITCH.length < 1 || PITCH.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${PITCH.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PITCH, 'utf-8');
