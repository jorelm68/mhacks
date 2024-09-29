// Screen for when you are actively in a game
// this is the bulk of the project

import TrackCard from "@/components/TrackCard";
import WaitingForGame from "@/components/WaitingForGame";
import { useGame } from "@/hooks/useGame";
import { useProfile } from "@/hooks/useProfile";
import { useTrack } from "@/hooks/useTrack";
import api from "@/lib/api";
import { Game, Profile, Res, Track } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// List of categories: Danceability, Energy, Key, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Time Signature, Popularity
// Danceability, Energy, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence

// Danceability, Valence (happiness), Loudness, Acousticness

export default function GameScreen() {
    const router = useRouter();
    const profile_id = useAppSelector(state => state.global.profile_id);
    const [loading, setLoading] = useState(true);
    // If the user is not logged in then send them to the home page
    useEffect(() => {
        const interval = setInterval(() => {
            if (!profile_id) {
                router.push('/');
            }
            else {
                setLoading(false);
            }
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [])
    const { activeGame }: Profile = useProfile(profile_id);
    const game: Game = useGame(activeGame);

    let current_track_id = '';
    if (profile_id === game.profile1) {
        current_track_id = game.profile1Path[game.profile1Path.length - 1];
    }
    else if (profile_id === game.profile2) {
        current_track_id = game.profile1Path[game.profile1Path.length - 1];
    }

    const current_track: Track = useTrack(current_track_id);
    const start_track = useTrack(game.startTrack);
    const end_track = useTrack(game.endTrack);

    if (!current_track_id || !game.startTrack || !game.endTrack || loading) {
        return <p>Loading...</p>;
    }

    // if (!game.profile1 || !game.profile2) {
    //     return <WaitingForGame game={game} />;
    // }

    const handleMove = async () => {
        const response: Res = await api.game.move(game._id, profile_id, 'Danceability', 1);
    
        console.log(response.data);
      }

    return (
        <>
            {game.name && <h2>{game.name}</h2>}

            <TrackCard track_id={game.startTrack} />
            <TrackCard track_id={current_track_id} />
            <TrackCard track_id={game.endTrack} />

            <button onClick={handleMove}>Move</button>
        </>
    )
}