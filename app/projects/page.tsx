import { Metadata } from "next";
import styles from "./page.module.css";
import ScrambleText from "../../components/animation/ScrambleText";
import ListRepos from "../../components/github/ListRepos";

export const metadata: Metadata = {
  title: "Projects",
  // icons: "../favicon.ico",
};

export default async function Page(props) {
  const repos = await ListRepos();
  return (
    <>
      <h1>
        <ScrambleText>Projects</ScrambleText>
      </h1>
      <>
        {repos.map((repo) => (
          <p>{repo.name} <span>{repo.visibility}</span> <span>{repo.languages_url}</span></p>
        ))}
      </>
    </>
  );
}
