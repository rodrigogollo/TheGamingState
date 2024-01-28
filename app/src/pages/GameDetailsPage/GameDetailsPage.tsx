import GameDetails from '../../components/GameDetails/GameDetails'

type Props = {
  IGDBgameId: string;
}

const GameDetailsPage = ({ IGDBgameId }: Props) => {
 return (
    <>
      <GameDetails IGDBgameId={IGDBgameId} />
      <h1>Rating 80/100</h1>
    </>
  )
}

export default GameDetailsPage;
