import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off entry v1.
// Deterministic and offline: writes one fixed, original line. No random,
// no network, no timestamps, no input. The file holds exactly the line
// itself, with no trailing newline and nothing else.
const LINE = "My therapist said I need closure, so I blocked her.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
