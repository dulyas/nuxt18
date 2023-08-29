import { readFileSync } from "fs";
import { IPost } from "~/types/IPost";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  return new Promise((resolve) => {
    const db: IPost[] = JSON.parse(readFileSync("./db.json").toString());

    setTimeout(() => resolve(db.find((post) => post.id === id)), 2000);
  });
});
