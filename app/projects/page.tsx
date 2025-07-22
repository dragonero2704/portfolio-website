import { Metadata } from "next";
import styles from "./page.module.scss";
import ScrambleText from "../../src/animation/ScrambleText";
import { GetRepos } from "../../src/github/getRepos";
import Repository from "./Repository";
import Repositories from "./Repositories";
import { Suspense, use } from "react";

// page metadata
export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default function Page(...props) {
  const repos = GetRepos();
  if (!repos) return <>No data</>;

  return (
    <>
      <h1 className="font-size-3-rem uppercase">
        <ScrambleText>Projects</ScrambleText>
      </h1>

      <Suspense fallback="Loading...">
        <Repositories repositories={repos}/>
      </Suspense>
    </>
  );
}
