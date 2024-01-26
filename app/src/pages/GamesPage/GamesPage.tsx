import { useQuery } from "@tanstack/react-query"
import { Link } from "wouter";
import { Game } from "../../interfaces/game.interface";
import GameCard from "../../components/GameCard/GameCard";

import "./GamesPage.css";

const GamesPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["games"],
    queryFn: () =>
     fetch('http://localhost:3000/api/v1/games/').then((res)=>
      res.json()
      ),
  })

  if (isPending) return <h1>Loading...</h1>
  if (error) return "An error occured: " + error.message;

  return (
    <div className="GamesPage">
      { 
        data.map((game: Game) => (
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
