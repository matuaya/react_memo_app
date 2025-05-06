import Memo from "./Memo.jsx";
import { useLoginStatus } from "../hooks/useLoginStatus.jsx";

function MemoList({ memos, onClickAdd, onClickMemo }) {
  const { isLoggedIn } = useLoginStatus();

  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} onClickMemo={onClickMemo} />
        ))}
      </ul>
      {isLoggedIn && (
        <button className="add-button" onClick={onClickAdd}>
          +
        </button>
      )}
    </div>
  );
}

export default MemoList;
