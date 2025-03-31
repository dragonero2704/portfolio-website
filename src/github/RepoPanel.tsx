import styles from "./repopanel.module.css";
import { GithubRepository } from "./interfaces";
import Image from "next/image";
export default function RepoPanel({ repo }: { repo: GithubRepository }) {
  //panel definition
  console.log(repo)
  return (
    <div>
      <h2>
        <a href={repo.html_url}>{repo.name}</a>
      </h2>
      <p>{repo.description}</p>
      <Image 
      src={repo.owner.avatar_url}
      alt={repo.owner.login}
      width={50} 
      height={50} />
    </div>
  );
}
