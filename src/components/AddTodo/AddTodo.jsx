import React, { useState } from "react";
// https://www.npmjs.com/package/uuid 자동으로 고유키값 생성해줌
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    // form고유의 submit기능이 작동되면
    e.preventDefault(); // 페이지가 리프레시 되지 않도록 설정
    if (text.trim().length === 0) {
      // trim 빈 여백을 잘라줌
      alert("입력안됨");
      return;
    }
    // 입력된게 없을때 !text return - handleSubmit함수에서 빠져나감
    // 스페이스 여백은 못걸러냄
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="할일을 입력"
        value={text}
        onChange={handleChange} // 변경될때마다 handleChange호출
        className={styles.input}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
