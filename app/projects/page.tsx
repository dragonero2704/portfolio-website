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
      <ol>
        {repos.map((repo) => (
          <li key={repo.id}><a className="highlight" href={repo.html_url}>{repo.name}</a></li>
        ))}
      </ol>
    </>
  );
}
