import { useRef } from "react";

function AddForm({ onSave, onDelete }) {
  const contentRef = useRef("");

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
          追加
        </button>
        <button className="delete-button" type="button" onClick={onDelete}>
          キャンセル
        </button>
      </div>
    </form>
  );
}

export default AddForm;
