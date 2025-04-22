import styles from "./repopanel.module.scss";
import { Repository } from "./interfaces";
import Image from "next/image";
export default function RepoPanel({ repo }: { repo: Repository }) {
  //panel definition
  if (!repo) return null;
  return (
    <div className={styles.repoCard}>
      <h2 className={styles.repoTitle}>
        <a href={repo.html_url} target="_null">{repo.name}</a>
      </h2>
      <Image
        src={repo.owner.avatar_url}
        alt={repo.owner.login}
        width={80}
        height={80}
        className={styles.repoIcon}
      />
      <p className={styles.repoDescription}>{repo.description}</p>
      <p className={styles.repoLanguages}>
        {Object.entries(repo.languages)
          .sort((a, b) => b[1] - a[1])
          .map((a,i) => <span key={i} className={styles.repoLanguage}>{a[0]}</span>)
          .slice(0,3) // limit to the most 3 used programming languages
          }
      </p>

      
    </div>
  );
}
