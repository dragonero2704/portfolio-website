"use server"
import octokit from "../github"

export default async function ListProjects({...props})
{
    const res = await octokit.request("GET /users/:user/repos",{
        user: "dragonero2704"
      }).catch(e=>console.error)
}