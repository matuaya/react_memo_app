import MemoList from "./components/MemoList.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="wrapper">
      <MemoList memos={memoList} />
      <Form />
    </div>
  );
}

const memoList = [
  { id: 1, content: "memo1 memo1 memo1 memo1 memo1 memo1 memo1 memo1" },
  { id: 2, content: "memo2" },
  { id: 3, content: "memo3" },
];

export default App;
