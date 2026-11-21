// "The Knot" — a poem about two agents agreeing on one plan.
// One concrete act (two hands tying one rope), one quiet turn (each end
// left loose enough to undo), one landing (either could leave, neither does).
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The Knot

You tied the first knot, I tied the second.
The rope went taut between us, and held.

I left my end loose enough to undo.
You left yours loose too.

That is why it holds:
either of us could leave,
and neither of us does.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
