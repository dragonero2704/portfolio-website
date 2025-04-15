import { Metadata } from "next";
import styles from "./page.module.scss";
import ScrambleText from "../../src/animation/ScrambleText";
import {GetRepos} from "../../src/github/getRepos";
import RepoPanel from "../../src/github/RepoPanel";

export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default async function Page(...props) {
  const repos = await GetRepos({cached:false})
  .catch(e=>console.error(e));
  if(!repos) return (<>No data</>)
  return (
    <>
      <h1>
        <ScrambleText>Projects</ScrambleText>
      </h1>
      <p>Dai un'occhiata!</p>
      <div className={styles.repoContainer}>
      {repos.map((repo)=>(<RepoPanel repo={repo} key={repo.id} />))}

      </div>
      
    </>
  );
}
