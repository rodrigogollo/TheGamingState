import { useEffect, useState } from "react";
import { Game } from "../../interfaces/game.interface";

type Props = {
  IGDBgameId: string;
}

const GamePage = ({ IGDBgameId }: Props) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    setGame(null);
    async function getGame(){
      const url = `http://localhost:3000/api/v1/games/${IGDBgameId}`
      const response = await fetch(url);
      const data:Game[] = await response.json();

      setGame(data[0]);
    }
    getGame();
  }, [])

  return (
    <div>
      { 
        game && 
        <div>
          <h1>{game.name}</h1> 
          <p>{game.summary}</p>
        </div>
      }
    </div>
  )
}

export default GamePage;
