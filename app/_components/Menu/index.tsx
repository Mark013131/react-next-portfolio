"use client";

import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";
import ConfirmButton from "../ConfirmButton";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <ConfirmButton destination="/news" buttonText="最近の活動" />
          </li>
          <li>
            <ConfirmButton destination="/members" buttonText="自己紹介" />
          </li>
          <li>
            <ConfirmButton destination="/contact" buttonText="お問い合わせ" />
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
