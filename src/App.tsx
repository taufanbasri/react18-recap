import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Taufan" } });
  };

  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
