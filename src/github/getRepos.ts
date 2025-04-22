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
    const response:any= await request(
      "GET /users/{username}/repos",
      {
        username: "dragonero2704",
      },
      cached
    ).catch(reject);
    if(!response) reject("No response")
    const {data} = response
    // data manipulation
    // 1. Fetch language map
    // https://api.github.com/repos/{owner}/{repo}/languages
    let repos = data as GithubRepository[];
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
    ).map((el) =>  el.status == "fulfilled" ? el.value?.data : el.reason);
    languages.forEach((language, i) => {
      if(!Object.defineProperty(repos[i], "languages", {"value":language, enumerable:true,writable:false})) console.warn(`Failed to retrieve language map for repository "${repos[i].full_name}"`)
    });
    resolve(repos as Repository[]);
  });
}
