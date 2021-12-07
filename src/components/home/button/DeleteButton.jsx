import React from "react";
import Swal from "sweetalert2";
import styles from "./delete_button.module.css";

const DeleteButtons = ({ id, onDelete }) => {
  const checkId = () => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "삭제한 카드의 정보는 되돌릴 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      confirmButtonColor: "#f9c87c",
      cancelButtonText: "취소",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "삭제 되었습니다.",
          icon: "success",
          confirmButton: "확인",
          confirmButtonColor: "#f9c87c",
        });
        onDelete(id);
      }
    });
  };

  return (
    <button className={styles.delete} onClick={checkId}>
      <i className="fas fa-eraser"></i>
    </button>
  );
};

export default DeleteButtons;
