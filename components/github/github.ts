import { Octokit } from "octokit";

export const github = new Octokit({
    auth: process.env.TOKEN
})