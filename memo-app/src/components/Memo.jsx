function Memo({ memo, onClickMemo }) {
  const lines = memo.content.split("\n");
  const firstLine = lines[0];

  return (
    <li className="memo" onClick={() => onClickMemo(memo.id)}>
      <p>{firstLine}</p>
    </li>
  );
}

export default Memo;
