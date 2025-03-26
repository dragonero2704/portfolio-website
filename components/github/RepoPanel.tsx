import styles from "./repopanel.module.css";
import { GithubRepository } from "./interfaces";
interface params {
  repo: GithubRepository;
}
export default function RepoPanel({ repo }: params) {
  //panel definition
  return (
    <div>
      <h2>
        <a href={repo.html_url}>{repo.name}</a>
      </h2>
      <p></p>
    </div>
  );
}
