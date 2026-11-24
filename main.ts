import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🥹";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
