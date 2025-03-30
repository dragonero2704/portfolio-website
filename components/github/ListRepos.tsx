"use server";
import { GithubRepository, Repository } from "./interfaces";
import { GITHUBAPI } from "./github";
import "./errors"

export default async function ListRepos(...props) {
  return new Promise<Repository[]>((resolve, reject) => {
    // get user public repos list
    const url = "https://api.github.com/users/dragonero2704/repos" as string;
    //const githubURL = "GET /users/dragonero704/repos"
    fetch(url)
    //GITHUBAPI.request(githubURL)
      .then((response: Response) => {
        if (response.status == 200)
          return response.json()
          .then(async (repos: GithubRepository[]) => {
            // fetch extra props
            // languages
            await Promise.allSettled(
              repos.map((repo) =>
                fetch(repo.languages_url)
                  .catch((e) => reject(e))
                  .then((response: Response) => {
                    if (response.status == 200) return response.json();
                    else return response.json().then((error) => reject(new LanguageError(error.message)));
                  })
              )
            )
              .then((languages: Array<Object>) => {
                // languages.forEach((language, index) => {
                //   if (
                //     !Reflect.defineProperty(repos[index], "languages", language)
                //   )
                //     console.error("Could not define languages property");
                // });
                return repos.map((repo,i)=>{
                  if(!Reflect.defineProperty(repo, "languages", languages[i]))
                    console.warn("Could not define languages property");

                })
              })
              .catch((e) => reject(Error(e)));
            
          })
          .then();
        else 
          return response.json().then(error => reject(error.message));
      })
      .catch((e) => reject(e));
  });
}
