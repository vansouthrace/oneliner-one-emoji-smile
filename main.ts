// One emoji to make a stranger smile: two hands shaping a heart.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "🫶");
