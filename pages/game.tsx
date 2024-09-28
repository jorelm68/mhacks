// Screen for when you are actively in a game
// this is the bulk of the project

import TrackCard from "@/components/TrackCard";
import { useGame } from "@/hooks/useGame";
import { useProfile } from "@/hooks/useProfile";
import { useTrack } from "@/hooks/useTrack";

// List of categories: Danceability, Energy, Key, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Time Signature, Popularity
// Danceability, Energy, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence

// Danceability, Valence (happiness), Loudness, Acousticness

export default function Game() {
    const profile_id = useContext();
    if (profile_id === null) {
        // not authenticated
        return <p>Not authenticated</p>;
    }
    
    const profile = useProfile(profile_id);

    const game = useGame(profile.activeGame);

    let current_track_id = null;
    if (profile_id === game.profile1) {
        track_id = game.profile1Path[game.profile1Path.length - 1];
    }

    const current_track = useTrack(current_track_id);
    const start_track = useTrack(game.startTrack);
    const end_track = useTrack(game.endTrack);

    return (
        <>
            <h1>Game</h1>
            <p>This is the game page</p>

            <TrackCard track={current_track} />
        </> 
    )
}