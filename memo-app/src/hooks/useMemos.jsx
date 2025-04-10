import useLocalStorage from "./useLocalStorage.jsx";

export default function useMemos(isAdding, selectedId) {
  const [memos, setMemos] = useLocalStorage("memo");
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  function saveMemo(content) {
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
          : memo,
      );
      setMemos(modifiedMemos);
    }
  }

  function deleteMemo() {
    if (selectedId) {
      setMemos(memos.filter((memo) => memo.id !== selectedId));
    }
  }

  return { saveMemo, deleteMemo, memos, selectedMemo };
}
