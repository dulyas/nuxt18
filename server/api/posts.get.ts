import { readFileSync } from "fs";

export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    const { page }: { page: number } = getQuery(event);

    const db = JSON.parse(readFileSync("./db.json").toString());

    setTimeout(
      () =>
        resolve({
          length: db.length,
          posts: db.slice((page - 1) * 5, page * 5),
        }),
      2000
    );
  });
});
