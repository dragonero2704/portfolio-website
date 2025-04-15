import { Octokit } from "octokit";
import {Octokit as OctokitClass} from "@octokit/core/dist-types"
import { unstable_cache } from "next/cache";
import {RequestParameters} from "@octokit/core/dist-types/types";

// authenticated github API client
// documentation: https://github.com/octokit/octokit.js
export const octokit : OctokitClass = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

/**
 *
 * @param route The octokit route to use
 * @param parameters The parameters of the octokit route
 * @returns response
 */
const retryRequest = async (route: string, parameters: RequestParameters) => {
  try {
    const response = await octokit.request(route, parameters);
    return response;
  } catch (error) {
    // https://docs.github.com/en/rest/guides/scripting-with-the-rest-api-and-javascript?apiVersion=2022-11-28
    // rate limiting error
    if (
      error.response &&
      error.status == 403 &&
      error.response.headers["x-ratelimit-remainig"] === "0"
    ) {
      const resetTime = error.response.headers["x-ratelimit-reset"];
      const now = Math.floor(Date.now() / 1000);
      const toWait = resetTime - now;
      console.warn(`Rate limit exceeded. Retrying in ${toWait} seconds`);
      setTimeout(retryRequest, toWait, route, parameters);
    }
  }
};

const REVALIDATE_INTERVAL = 600;
/**
 *
 */
const requestCached = unstable_cache(
  async (route, parameters) => {
    console.log("Revalidating cahe");
    return retryRequest(route, parameters);
  },
  null,
  {
    revalidate: REVALIDATE_INTERVAL,
    tags: ["server"],
  }
);

export default async function request(route:string, parameters: RequestParameters, cached:boolean = false){
  if(cached) return requestCached(route,parameters)
    else return retryRequest(route, parameters)
}
