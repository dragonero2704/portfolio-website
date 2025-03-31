"use server";
import { GithubRepository, Repository } from "./interfaces";
import { request, requestCached } from "./github";
import "./errors";

export async function GetRepos({ cached = false }: { cached: boolean }) {
  return new Promise<Repository[]>(async (resolve, reject) => {
    // get user public repos list
    // fetch(url)
    // const url = "https://api.github.com/users/dragonero2704/repos" as string;

    const { data } = cached
      ? await requestCached("GET /users/{username}/repos", {
          username: "dragonero2704",
        }).catch(reject)
      : await request("GET /users/{username}/repos", {
          username: "dragonero2704",
        }).catch(reject);
    resolve(data);

    // .catch((e) => reject(e));

    // repos manipulation
  });
}
