"use server"
import { GithubRepository, Repository } from "./interfaces";

export default async function ListRepos(...props) {
  return new Promise<Repository[]>((res, rej) => {
    // get user public repos list
    const url = "https://api.github.com/users/dragonero2704/repos" as string;
    fetch(url)
      .catch((e) => rej(e))
      .then((response: Response) => response.json())
      //TODO fetch all languages and add them to the repository json under the "languages" field
      .then(async (repos: GithubRepository[]) => {
        // fetch extra props
        // languages
        console.log(repos)
        await Promise.allSettled(repos.map((repo) =>
          fetch(repo.languages_url)
            .catch((e) => console.error)
            .then((response: Response) => response.json())
        ))
        .catch(e=>rej(e))
        .then(languages=>{
          languages.forEach((language, index)=>{
            if(!Reflect.defineProperty(repos[index],"languages", language)) 
              console.error("Could not define languages property")
          })
        })
        console.log(repos)
        res(repos as Repository[])
      })
      
  });
}
