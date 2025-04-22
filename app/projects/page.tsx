import { Metadata } from "next";
import styles from "./page.module.scss";
import ScrambleText from "../../src/animation/ScrambleText";
import { GetRepos } from "../../src/github/getRepos";
import RepoPanel from "../../src/github/RepoPanel";

// forces dynamic serverside rendering at each request
export const dynamic = "force-dynamic";

// page metadata
export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default async function Page(...props) {
  const repos = await GetRepos({ cached: true }).catch((e) => console.error(e));
  if (!repos) return <>No data</>;

  const topicsFilter = (
    { topics }: { topics: string[] }
  ): boolean => {
    const blacklist = [
      "assignment",
      "school-assignment"
    ]

    const whitelist = [

    ];
    let flag = true;
    blacklist.forEach((term) => {
      if(topics.includes(term)) flag = false
    });
    whitelist.forEach((term) => {
      if(topics.includes(term)) flag = true
    });
    return flag
  };

  return (
    <>
      <h1 className="font-size-3-rem uppercase">
        <ScrambleText>Projects</ScrambleText>
      </h1>
      <div className={styles.repoContainer}>
        {repos
          .filter((repo) => repo.description) // filter out repositories that do not have a description
          .filter(topicsFilter)               // filter out blacklisted topics and include whitelisted topics
          .map((repo) => (                    // put everything in the RepoPanel JSX element
            <RepoPanel repo={repo} key={repo.id} />
          ))}
      </div>
    </>
  );
}
