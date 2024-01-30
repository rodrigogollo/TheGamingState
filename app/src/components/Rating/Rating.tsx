import { useEffect, useState } from "react"
import { IRating } from "../../interfaces/rating.interface"

type Props = {
	IGDBgameId: string
}

const Rating = ({ IGDBgameId }:Props) => {
	const [ratings, setRatings] = useState<IRating[] | []>([])

	useEffect(() => {
		fetch(`http://localhost:3000/api/v1/ratings/game/${IGDBgameId}`)
		.then(response => response.json())
		.then(data => setRatings(data))
	}, [])

	return <> 
		{ ratings && 
			ratings.map((rating) => <h1 key={`${rating.IGDBgameId}_${rating.userId}`}>{rating.title}</h1>)
		}
	</>
}

export default Rating
