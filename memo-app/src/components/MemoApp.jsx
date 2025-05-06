import { useState } from "react";
import MemoList from "./MemoList.jsx";
import AddForm from "./AddForm.jsx";
import EditForm from "./EditForm.jsx";
import useMemos from "../hooks/useMemos.js";

function MemoApp() {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { memos, selectedMemo, saveMemo, deleteMemo } = useMemos(
    isAdding,
    selectedId,
  );

  function handleClickMemo(id) {
    setSelectedId(id);
    setIsAdding(false);
  }

  function handleClickAdd() {
    setIsAdding(true);
    setSelectedId(null);
  }

  function handleSave(content) {
    saveMemo(content);

    setIsAdding(false);
    setSelectedId(null);
  }

  function handleDelete() {
    deleteMemo();

    setIsAdding(false);
    setSelectedId(null);
  }

  return (
    <div className="container">
      <MemoList
        memos={memos}
        onClickMemo={handleClickMemo}
        onClickAdd={handleClickAdd}
      />
      {isAdding ? (
        <AddForm onSave={handleSave} onDelete={handleDelete} />
      ) : selectedId ? (
        <EditForm
          key={selectedId}
          memo={selectedMemo}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ) : null}
    </div>
  );
}

export default MemoApp;
