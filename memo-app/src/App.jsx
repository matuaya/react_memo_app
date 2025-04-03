import { useState } from "react";
import MemoList from "./components/MemoList.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [memos, setMemos] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  function handleClickMemo(id) {
    setSelectedId(id);
  }

  function handleClickAdd() {
    setIsAdding(true);
    setSelectedId(null);
  }

  function handleSave(content) {
    const newId = crypto.randomUUID();

    if (isAdding) {
      setMemos([
        ...memos,
        {
          id: newId,
          content,
        },
      ]);
    } else {
      const modifiedMemos = memos.map((memo) =>
        memo.id === selectedId
          ? {
              ...memo,
              content,
            }
          : memo
      );
      setMemos(modifiedMemos);
    }

    setIsAdding(false);
    setSelectedId(null);
  }

  function handleDelete() {
    if (selectedId) {
      setMemos(memos.filter((memo) => memo.id !== selectedId));
    }

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

export default App;
