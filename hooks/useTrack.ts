import api from "@/lib/api";
import constants from "@/lib/constants";
import { Track, Res } from "@/lib/types";
import { useEffect, useState } from "react";

export async function useTrack(track_id: string): Promise<Track> {
    const [track, setTrack] = useState<Track>(constants.EMPTY_TRACK);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const res: Res = await api.track.read(track_id);
                if (res.success) {
                    setTrack(res.data as Track);
                } else {
                    console.error(res.errorMessage);
                }
            } catch (error) {
                console.error("Failed to fetch track:", error);
            }
        };

        // Fetch the track initially
        fetchTrack();

        // Set up interval to refresh track data every 5 seconds
        const interval = setInterval(() => {
            fetchTrack();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [track_id]);

    return track;
}