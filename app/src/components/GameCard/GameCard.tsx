import "./GameCard.css"

type GameCardProps = {
	id: number;
	name: string;
	cover: string;
}

const GameCard = ({id, name, cover}: GameCardProps) => {
	return (
		<div className="GameCard" key={id + "_container"}>
			<img key={id + "_cover"} src={cover} />
			<p key={id + "_name"}>{name}</p>
			<p key={id + "_author"}>{"From Software"}</p>
			<p key={id + "_rating"}>{"80/100 user score (1,775)"}</p>
		</div>
	)
}
export default GameCard;
