import Memo from "./Memo.jsx";

function MemoList({ memos }) {
  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} />
        ))}
      </ul>
      <button className="add-button">+</button>
    </div>
  );
}

export default MemoList;
