import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./Todo.module.css";
// 아이콘 이름 앞글자

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    // 이 컴포넌트 내부에서만 사용
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status == "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {todo.text}
      </label>
      <span>
        <button onClick={handleDelete}>
          <BsTrash className={styles.icon} />
        </button>
      </span>
    </li>
  );
};

export default Todo;
