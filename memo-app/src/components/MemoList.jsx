import Memo from "./Memo.jsx";

function MemoList({ memos, onClickAdd, onClickMemo }) {
  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} onClickMemo={onClickMemo} />
        ))}
      </ul>
      <button className="add-button" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
}

export default MemoList;
