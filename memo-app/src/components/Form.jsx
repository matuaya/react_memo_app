import { useRef } from "react";

function Form({ memo, onSave, onDelete }) {
  const contentRef = useRef(memo ? memo.content : "");

  return (
    <form className="form">
      <textarea
        placeholder="新規メモ"
        defaultValue={contentRef.current}
        ref={contentRef}
      ></textarea>
      <div className="button-container">
        <button className="save-button" onClick={onSave}>
          更新
        </button>
        <button className="delete-button" onClick={onDelete}>
          削除
        </button>
      </div>
    </form>
  );
}

export default Form;
