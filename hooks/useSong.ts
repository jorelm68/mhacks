import api from "@/lib/api";
import constants from "@/lib/constants";
import { Song, Res } from "@/lib/types";
import { useEffect, useState } from "react";

export function useSong(track_id: string): Song {
    const [song, setSong] = useState<Song>(constants.EMPTY_SONG);

    useEffect(() => {
        const fetchSong = async () => {
            if (!track_id) {
                return;
            }
            try {
                const access_token: string | null = localStorage.getItem('access_token');
                if (!access_token) {
                    return;
                }

                const res: Res = await api.track.read(track_id);
                const res2: Res = await api.spotify.getTrack(track_id, access_token);

                console.log(res, res2);
                
                if (res.success && res2.success) {
                    const song = {
                        ...res.data.track, // _id, index, createdAt, updatedAt,
                        ...res2.data.track, // name, artist, album, image, duration
                    }

                    setSong(song as Song);
                } else {
                    console.error(res.errorMessage);
                }
            } catch (error) {
                console.error("Failed to fetch song:", error);
            }
        };

        // Fetch the song initially
        fetchSong();

        // Set up interval to refresh song data every 5 seconds
        const interval = setInterval(() => {
            fetchSong();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [track_id]);

    return song;
}