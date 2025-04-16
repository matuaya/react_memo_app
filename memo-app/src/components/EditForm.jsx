import { useRef } from "react";

function EditForm({ memo, onSave, onDelete }) {
  const contentRef = useRef(memo.content);

  return (
    <form className="form">
      <textarea defaultValue={contentRef.current} ref={contentRef}></textarea>
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
          更新
        </button>
        <button className="delete-button" type="button" onClick={onDelete}>
          削除
        </button>
      </div>
    </form>
  );
}

export default EditForm;
