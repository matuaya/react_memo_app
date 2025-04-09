import { useRef } from "react";

function Form({ memo, onSave, onDelete, isAdding }) {
  const contentRef = useRef(memo ? memo.content : "");

  return (
    <form className="form">
      <textarea
        placeholder="新規メモ"
        defaultValue={contentRef.current}
        ref={contentRef}
      ></textarea>
      <div className="button-container">
        <button
          className="save-button"
          type="button"
          onClick={() => {
            const content = contentRef.current.value.trim();
            if (content) {
              onSave(content);
            }
          }}
        >
          {isAdding ? "追加" : "更新"}
        </button>
        <button className="delete-button" type="button" onClick={onDelete}>
          {isAdding ? "キャンセル" : "削除"}
        </button>
      </div>
    </form>
  );
}

export default Form;
