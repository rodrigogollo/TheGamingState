import { Game } from "../../interfaces/game.interface";
import { useQuery } from "@tanstack/react-query"

type Props = {
  IGDBgameId: string;
}

const GamePage = ({ IGDBgameId }: Props) => {

  const { isPending, error, data } = useQuery({
    queryKey: [`game_${IGDBgameId}`],
    queryFn: () =>
     fetch(`http://localhost:3000/api/v1/games/${IGDBgameId}`)
      .then((res) => res.json())
      .then((data: Game[]) => data[0]),
  })

  if (isPending) return <h1>Loading...</h1>
  if (error) return "An error occured: " + error.message;

  return (
    <div>
      { 
        <div>
          <h1>{data.name}</h1> 
          <p>{data.summary}</p>
        </div>
      }
    </div>
  )
}

export default GamePage;
