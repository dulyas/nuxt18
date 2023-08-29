import { readFileSync, writeFileSync } from "fs";
import { v4 } from "uuid";

export default defineEventHandler((event) => {
  return new Promise(async (resolve) => {
    const { title, subtitle, text } = await readBody(event);

    const db = JSON.parse(readFileSync("./db.json").toString());

    db.push({ title, subtitle, text, id: v4() });

    writeFileSync("./db.json", JSON.stringify(db));

    setTimeout(
      () =>
        resolve({
          success: true,
        }),
      2000
    );
  });
});
