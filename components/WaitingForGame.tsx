import { Game } from "@/lib/types";
import TrackCard from "./TrackCard";
import Text from "./Text";

interface WaitingForGameProps {
    game: Game;
}

export default function WaitingForGame({ game }: WaitingForGameProps) {


    return (
        <div>
            <Text>Waiting for game</Text>
            {game.name && <Text>{game.name}</Text>}
            <Text>Player 1: {game.profile1 ? game.profile1 : 'Searching...'}</Text>
            <Text>Player 2: {game.profile2 ? game.profile2 : 'Searching...'}</Text>
        </div>
    )
}