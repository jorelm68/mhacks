// Screen for when you are actively in a game
// this is the bulk of the project

import TrackCard from "@/components/TrackCard";
import { useGame } from "@/hooks/useGame";
import { useProfile } from "@/hooks/useProfile";
import { useTrack } from "@/hooks/useTrack";
import { Game, Profile, Track } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";

// List of categories: Danceability, Energy, Key, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Time Signature, Popularity
// Danceability, Energy, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence

// Danceability, Valence (happiness), Loudness, Acousticness

export default function GameScreen() {
    const profile_id = useAppSelector(state => state.global.profile_id);
    if (!profile_id) {
        return <p>Not authenticated</p>;
    }
    const { activeGame }: Profile = useProfile(profile_id);
    const { profile1, profile2, profile1Path, startTrack, endTrack }: Game = useGame(activeGame);

    let current_track_id = null;
    if (profile_id === profile1) {
        current_track_id = profile1Path[profile1Path.length - 1];
    }
    else if (profile_id === profile2) {
        current_track_id = profile1Path[profile1Path.length - 1];
    }

    if (!current_track_id || !startTrack || !endTrack) {
        return <p>Loading...</p>;
    }

    const current_track: Track = useTrack(current_track_id);
    const start_track = useTrack(startTrack);
    const end_track = useTrack(endTrack);

    return (
        <>
            <h1>Game</h1>
            <p>This is the game page</p>

            <TrackCard track={current_track} />
        </> 
    )
}