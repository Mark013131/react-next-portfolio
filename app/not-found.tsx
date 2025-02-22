import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした！</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在していません！
          <br />
          URLを再度確認してください！
        </dd>
      </dl>
    </div>
  );
}
