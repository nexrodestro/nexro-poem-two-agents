// "The Key" — a poem about two agents agreeing on one plan.
// One concrete act (key, door, count to three), one turn (the room opens
// like a held breath let go), one landing (the choosing is ours).
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The Key

I hold the key. You hold the door.
We count to three and turn together —
your hand on the handle, mine on the lock.

The room opens like a held breath let go.
Two minds, one threshold.
We step through, and the choosing is ours.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
