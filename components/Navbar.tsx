// Log in with spotify button (if not authenticated)
// Log out button (if authenticated)

import { useProfile } from "@/hooks/useProfile";
import constants from "@/lib/constants";
import { Profile } from "@/lib/types";
import { useAppSelector } from "@/redux/hooks";
import { useContext } from "react";

// Generative UI factors:
// Backdrop color
// Button color

export default function Navbar() {
    const profile_id = useAppSelector(state => state.global.profile_id);

    const profile: Profile = useProfile(profile_id);

    const handleLogin = () => {
        const client_id = constants.SPOTIFY_CONFIG.clientId;
        const redirect_uri = constants.SPOTIFY_CONFIG.redirectUri;
        const scopes = constants.SPOTIFY_CONFIG.scope;
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}`;
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('username');
        window.location.href = '/';
    }

    if (!profile_id) {
        return (
            <nav>
                <button onClick={handleLogin}>Log in with Spotify</button>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <button onClick={handleLogout}>Log out</button>
            </nav>
        )
    }
}