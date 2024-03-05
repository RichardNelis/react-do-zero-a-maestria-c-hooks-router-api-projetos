import styles from "./TaskModal.module.css";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const TaskModal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");

    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide" onClick={closeModal}>
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default TaskModal;
