import { userAgent } from "next/server";
import { Octokit } from "octokit";
// authenticated github API client
// documentation: https://github.com/octokit/octokit.js
export const GITHUBAPI = new Octokit({
    auth: process.env.TOKEN,
    userAgent: "rudidigital.it"
})