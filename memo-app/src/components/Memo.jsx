function Memo({ memo }) {
  const lines = memo.content.split("\n");
  const firstLine = lines[0];
  return (
    <li className="memo">
      <p>{firstLine}</p>
    </li>
  );
}

export default Memo;
