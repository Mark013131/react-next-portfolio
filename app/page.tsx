import styles from "./page.module.css";
import Image from "next/image";

import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>青山陽希のサイトへようこそ</h1>
          <p className={styles.description}>
            これは私のポートフォリオサイトです。
            私の活動や制作物を紹介しています。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/grassland-dot1.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
        <div className={styles.santaContainer}>
          <Image
            className={styles.santa}
            src="/yusya.png"
            alt="サンタキャラクター"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
