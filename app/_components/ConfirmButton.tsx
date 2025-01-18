"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ConfirmButton.module.css";

interface ConfirmButtonProps {
  destination: string;
  buttonText: string; // ボタンのテキストを動的に変更
  modalMessage?: string; // モーダルに表示するメッセージを動的に変更
  confirmText?: string; // 「はい」のボタンテキスト
  cancelText?: string; // 「いいえ」のボタンテキスト
}

export default function ConfirmButton({
  destination,
  buttonText,
  modalMessage,
  confirmText,
  cancelText,
}: ConfirmButtonProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleConfirmClick = () => {
    setModalVisible(true); // モーダルを表示
  };

  const handleYesClick = () => {
    setModalVisible(false);
    router.push(destination); // 遷移先URLに変更
  };

  const handleNoClick = () => {
    setModalVisible(false); // モーダルを閉じる
  };

  return (
    <>
      <button className={styles["confirm-button"]} onClick={handleConfirmClick}>
        {buttonText} {/* ボタンのテキストを変更 */}
      </button>

      {isModalVisible && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal"]}>
            <p>
              {modalMessage ??
                `本当に${buttonText}に移動してもよろしいですか？`}
            </p>{" "}
            {/* モーダルメッセージを変更 */}
            <div className={styles["modal-buttons"]}>
              <button
                className={styles["modal-button"]}
                onClick={handleYesClick}
              >
                {confirmText ?? "はい"} {/* 「はい」のボタンテキスト */}
              </button>
              <button
                className={styles["modal-button"]}
                onClick={handleNoClick}
              >
                {cancelText ?? "いいえ"} {/* 「いいえ」のボタンテキスト */}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
