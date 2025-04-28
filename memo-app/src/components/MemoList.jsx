import Memo from "./Memo.jsx";
import { useLoginStatus } from "../contexts/useLoginStatus.js";

function MemoList({ memos, onClickAdd, onClickMemo }) {
  const { isLoggedIn } = useLoginStatus();

  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} onClickMemo={onClickMemo} />
        ))}
      </ul>
      <button className="add-button" onClick={onClickAdd}>
        {isLoggedIn && "+"}
      </button>
    </div>
  );
}

export default MemoList;
