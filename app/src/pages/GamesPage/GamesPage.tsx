import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Game } from "../../interfaces/game.interface";
import GameCard from "../../components/GameCard/GameCard";

import "./GamesPage.css";

const GamesPage = () => {
  const [games, setGames] = useState<Game[] | []>([]);

    useEffect(() => {
        async function getGames(){
            const url = `http://localhost:3000/api/v1/games/`
            const response = await fetch(url);
            const data:Game[] = await response.json();

            setGames(data);
        }
        getGames();
        console.log("i fired once");
    }, [])

  return (
    <div className="GamesPage">
      { 
        games && 
        games.map((game) => (
            <Link key={game.id + "_link"} href={`/games/${game.id}`}>
              <a key={game.id+"_a"} className="link">
                  <GameCard key={game.id} id={game.id} name={game.name} cover={game?.cover?.url.replace("t_thumb", "t_cover_big")} />
              </a>
            </Link>
        ))
      }
    </div>
  )
}

export default GamesPage;
