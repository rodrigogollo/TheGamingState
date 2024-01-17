import { useEffect, useState } from "react";
import { Game } from "./interfaces/game.interface";

type Props = {
  IGDBgameId: string;
}

const GamePage = ({ IGDBgameId }: Props) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    async function getGame(){
      const url = `http://localhost:3000/api/v1/game/${IGDBgameId}`
      const response = await fetch(url);
      const data:Game[] = await response.json();
      console.log("game res", data);
      setGame(data[0]);
    }
    getGame();
  }, [])

  return (
    <div>
      { 
        game && <h1>{game.name}</h1> 
      }
      <p>game description</p>
    </div>
  )
}
export default GamePage;
