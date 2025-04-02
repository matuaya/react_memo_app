import { useState } from "react";
import MemoList from "./components/MemoList.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [memos, setMemos] = useState(initialMemos);
  const [isAdding, setIsAdding] = useState(false);
  const [id, setId] = useState(null);
  const selectedMemo = memos.find((memo) => memo.id === id);

  function handleClickMemo(id) {
    setId(id);
  }

  function handleClickAdd() {
    setIsAdding(true);
    setId(null);
  }

  function handleSave() {}

  function handleDelete() {}

  return (
    <div className="wrapper">
      <MemoList
        memos={memos}
        onClickMemo={handleClickMemo}
        onClickAdd={handleClickAdd}
      />
      {(isAdding || id) && (
        <Form
          key={id || "new"}
          memo={selectedMemo}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

const initialMemos = [
  { id: 1, content: "memo1 memo1 memo1 memo1 memo1 memo1 memo1 memo1" },
  { id: 2, content: "memo2" },
  { id: 3, content: "memo3" },
];

export default App;
