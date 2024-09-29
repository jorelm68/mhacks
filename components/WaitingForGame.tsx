import { Game } from "@/lib/types";

interface WaitingForGameProps {
    game: Game;
}

export default function WaitingForGame({ game }: WaitingForGameProps) {
    return (
        <div>
            <h1>Waiting for game</h1>
            {game.name && <h2>{game.name}</h2>}
            <p>This is the waiting for game component</p>
        </div>
    )
}