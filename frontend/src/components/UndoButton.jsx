export default function UndoButton() {
  const undo = async () => {
    await fetch("http://localhost:5000/api/transactions/undo", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  };

  return (
    <button className="undo-btn" onClick={undo}>
      Undo Last Action
    </button>
  );
}
