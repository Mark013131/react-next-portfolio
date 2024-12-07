import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つからないZOY★！</dt>
        <dd className={styles.text}>
          Youがアクセスしようとしたページは存在しないZOY★！
          <br />
          URLを再度確認するZOY★！
        </dd>
      </dl>
    </div>
  );
}
