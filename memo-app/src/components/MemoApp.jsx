import { useState } from "react";
import MemoList from "./MemoList.jsx";
import Form from "./Form.jsx";
import useMemos from "../hooks/useMemos.jsx";

function MemoApp() {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { memos, selectedMemo, saveMemo, deleteMemo } = useMemos(
    isAdding,
    selectedId
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
    <div className="wrapper">
      <MemoList
        memos={memos}
        onClickMemo={handleClickMemo}
        onClickAdd={handleClickAdd}
      />
      {(isAdding || selectedId) && (
        <Form
          key={selectedId || "new"}
          memo={selectedMemo}
          onSave={handleSave}
          onDelete={handleDelete}
          isAdding={isAdding}
        />
      )}
    </div>
  );
}

export default MemoApp;
