import { readFileSync } from "fs";

export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    const db = JSON.parse(readFileSync("./db.json").toString());

    setTimeout(() => resolve(db), 2000);
  });
});
