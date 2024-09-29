// Screen for when you are actively in a game
// this is the bulk of the project

import Navbar from "@/components/Navbar";
import TrackCard from "@/components/TrackCard";
import NavControls from "@/components/NavControls";
import WaitingForGame from "@/components/WaitingForGame";
import { useGame } from "@/hooks/useGame";
import { useProfile } from "@/hooks/useProfile";
import { useTrack } from "@/hooks/useTrack";
import api from "@/lib/api";
import { Attribute, Game, Profile, Res, Track } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import Dropdown from "@/components/Dropdown";

// List of categories: Danceability, Energy, Key, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Time Signature, Popularity
// Danceability, Energy, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence

// Danceability, Valence (happiness), Loudness, Acousticness


export default function GameScreen() {
    const router = useRouter();
    const profile_id = useAppSelector(state => state.global.profile_id);
    const [loading, setLoading] = useState(true);
    const [attribute, setAttribute] = useState<Attribute>('Danceability');
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

    let current_track_index = 0;
    if (profile_id === game.profile1) {
        current_track_index = game.profile1Path[game.profile1Path.length - 1];
    }
    else if (profile_id === game.profile2) {
        current_track_index = game.profile1Path[game.profile1Path.length - 1];
    }

    const current_track: Track = useTrack(current_track_index);
    const start_track = useTrack(game.startTrack);
    const end_track = useTrack(game.endTrack);

    if (!current_track_index || !game.startTrack || !game.endTrack || loading) {
        return <p>Loading...</p>;
    }

    // if (!game.profile1 || !game.profile2) {
    //     return <WaitingForGame game={game} />;
    // }

    const handleIncrease = async () => {
        const response: Res = await api.game.move(game._id, profile_id, attribute, 1);

        console.log(response.data);
    }

    const handleDecrease = async () => {
        const response: Res = await api.game.move(game._id, profile_id, attribute, 0);

        console.log(response.data);
    }

    const handleChangeAttribute = (attribute: Attribute): void => {
        setAttribute(attribute);
    }

    return (
        <>
            <Navbar />

            {game.name && <h2>{game.name}</h2>}

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1200px',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: '20px',
                    }}>
                        <TrackCard track_index={game.startTrack} size='medium' />
                        <TrackCard track_index={current_track_index} size='large' />
                        <TrackCard track_index={game.endTrack} size='medium' />
                    </div>
                    <Dropdown attribute={attribute} onChangeAttribute={handleChangeAttribute} />
                    <NavControls onIncrease={handleIncrease} onDecrease={handleDecrease} />
                    <ProgressBar />
                </div>
            </div>
        </>
    )
}