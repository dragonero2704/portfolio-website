"use server";
import { GithubRepository, Repository } from "./interfaces";
import request from "./github";
import { cachedFetch } from "../../request";
import "./errors";

export async function GetRepos({
  cached = false,
}: {
  cached: boolean;
}): Promise<Array<Repository>> {
  return new Promise<Array<Repository>>(async (resolve, reject) => {
    // get user public repos list
    const { data }: { data: Repository[] } = await request(
      "GET /users/{username}/repos",
      {
        username: "dragonero2704",
      },
      cached
    ).catch(reject);
    // data manipulation
    // 1. Fetch language map
    // https://api.github.com/repos/{owner}/{repo}/languages
    let repos = data;
    if (!repos) reject("No repos");

    const languages = (
      await Promise.allSettled(
        repos.map(async (repo) =>
          request("GET /repos/{username}/{repository}/languages", {
            username: "dragonero2704",
            repository: repo.name,
          })
        )
      )
    ).map((el) => el.value);

    languages.forEach((language, i) => {
      if(!Reflect.defineProperty(repos[i], "languages", {value:language})) console.warn("Porcodio")
    });
    console.log(repos);
    resolve(repos as Repository[]);
  });
}
