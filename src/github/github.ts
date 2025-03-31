import { Octokit } from "octokit";
import { unstable_cache } from "next/cache";
// authenticated github API client
// documentation: https://github.com/octokit/octokit.js
export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

/**
 *
 * @param route The octokit route to use
 * @param parameters The parameters of the octokit route
 * @returns response
 */
export const request = async (route: string, parameters: Object) => {
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
      setTimeout(request, toWait, route, parameters);
    }
  }
};

const REVALIDATE_INTERVAL = 600;
/**
 *
 */
export const requestCached = unstable_cache(
  async (route, parameters) => {
    console.log("Revalidating cahe");
    return request(route, parameters);
  },
  null,
  {
    revalidate: REVALIDATE_INTERVAL,
    tags: ["server"],
  }
);
