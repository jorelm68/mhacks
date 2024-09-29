import { Game } from "@/lib/types";
import TrackCard from "./TrackCard";

interface WaitingForGameProps {
    game: Game;
}

export default function WaitingForGame({ game }: WaitingForGameProps) {


    return (
        <div>
            <h1>Waiting for game</h1>
            {game.name && <h2>{game.name}</h2>}
            <p>Player 1: {game.profile1 ? game.profile1 : 'Searching...'}</p>
            <p>Player 2: {game.profile2 ? game.profile2 : 'Searching...'}</p>
        </div>
    )
}