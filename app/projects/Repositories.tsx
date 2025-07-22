import { use } from "react";
import Repository from "./Repository";
import { GithubRepository } from "../../src/github/interfaces";
import styles from "./page.module.scss";

export default function Repositories({ repositories }) {
  const repos: Array<GithubRepository> = use(repositories);
  
  const topicsFilter = ({ topics }: { topics: string[] }): boolean => {
      const blacklist = ["assignment", "school-assignment"];
  
      const whitelist = [];
      let flag = true;
      blacklist.forEach((term) => {
        if (topics.includes(term)) flag = false;
      });
      whitelist.forEach((term) => {
        if (topics.includes(term)) flag = true;
      });
      return flag;
    };

  return <div className={styles.repoContainer}>
  {
    repos
    .filter(repo=>repo.description)
    .filter(topicsFilter)
    .map(repo=><Repository repo={repo}/>)
  }</div>;
}
