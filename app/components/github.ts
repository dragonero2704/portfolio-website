import { Octokit } from "octokit";
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN}) as Octokit;
console.log("Authenticaded with github")
export default octokit