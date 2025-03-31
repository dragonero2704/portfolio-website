"use server";
import { GithubRepository, Repository } from "./interfaces";
import { request, requestCached } from "./github";
import {cachedFetch} from "../../request"
import "./errors";

export async function GetRepos({ cached = false }: { cached: boolean }):Promise<Array<Repository>> {
  return new Promise<Array<Repository>>(async (resolve, reject) => {
    // get user public repos list
    const { data } : {data:Repository[]} = cached
      ? await requestCached("GET /users/{username}/repos", {
          username: "dragonero2704",
        }).catch(reject)
      : await request("GET /users/{username}/repos", {
          username: "dragonero2704",
        }).catch(reject);
    // data manipulation
    // 1. Fetch language map
    console.log(data)
    const languages = await Promise.allSettled(
      data.map(repo=>{cachedFetch(repo.languages_url)})
    )
    console.log(`Languages : ${languages[0].value}`)

    const repos = data.map((repo,i)=>{return Reflect.defineProperty(repo, "languages", languages[i])? repo : repo})

    if(!repos) reject("No repos");
    resolve(repos)

  });
}
