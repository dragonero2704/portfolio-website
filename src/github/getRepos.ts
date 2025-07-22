"use server";
import { GithubRepository, MyRepository } from "./interfaces";
import request from "./github";
import "./errors";
import { OctokitResponse } from "@octokit/types";

export async function GetRepos(): Promise<Array<MyRepository>> {
  return new Promise<Array<MyRepository>>(async (resolve, reject) => {
    // get user public repos list
    const response = await request(
      "GET /users/{username}/repos",
      {
        username: "dragonero2704",
      }
    ).catch(reject);

    if (!response) reject("No response");
    const { data } = response as OctokitResponse<any, number>;
    resolve(data as MyRepository[]);
  });
}
