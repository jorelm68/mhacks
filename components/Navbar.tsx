// Log in with spotify button (if not authenticated)
// Log out button (if authenticated)

import { useContext } from "react";

// Generative UI factors:
// Backdrop color
// Button color

export default function Navbar() {
    const profile = useContext();

    if (profile === null) {
        return (
            <nav>
                <button>Log in with Spotify</button>
            </nav>
        )
    }
    else {
        return (
            <nav>
                <button>Log out</button>
            </nav>
        )
    }
}