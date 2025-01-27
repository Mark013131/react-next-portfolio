import React from "react";
import { getNewsList } from "@/app/_libs/microcms";
import Image from "next/image";
import styles from "./page.module.css"; // Adjust the path as necessary
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <div className={styles.kingContainer}>
        <Image
          className={styles.king}
          src="/king.png"
          alt="王様"
          width={500}
          height={500}
        />
      </div>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
