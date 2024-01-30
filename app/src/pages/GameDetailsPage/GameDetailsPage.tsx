import GameDetails from '../../components/GameDetails/GameDetails'
import Rating from '../../components/Rating/Rating'

type Props = {
  IGDBgameId: string;
}

const GameDetailsPage = ({ IGDBgameId }: Props) => {
 return (
    <>
      <GameDetails IGDBgameId={IGDBgameId} />
      <Rating IGDBgameId={IGDBgameId} />
    </>
  )
}

export default GameDetailsPage
