import { useGame } from "@/hooks/useGame";
import { useProfile } from "@/hooks/useProfile";
import api from "@/lib/api";
import constants from "@/lib/constants";
import { Game, Profile, Res } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function CreateGame() {
    const router = useRouter();
    const profile_id = useAppSelector(state => state.global.profile_id);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const profile: Profile = useProfile(profile_id);

    const [name, setName] = useState('gamey');

    const handleCreateGame = async () => {
        setLoading(true);
        setError('');

        const res: Res = await api.game.create(name, profile_id);

        if (res.success) {
            router.push(`/game`);
        } else {
            setError(res.errorMessage);
        }

        setLoading(false);
    }

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

    return (
        <div>
            <h1>Create Game</h1>
            {loading && <p>Loading...</p>}
            {!loading && (
                <div>
                    <input type="text" placeholder="Game Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleCreateGame}>Create Game</button>
                </div>
            )}
        </div>
    )
}