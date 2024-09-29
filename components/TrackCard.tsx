import { useSong } from "@/hooks/useSong";
import { Song, Track } from "@/lib/types"

interface TrackProps {
    track_id: string;
}

export default function TrackCard({ track_id }: TrackProps) {
    const song: Song = useSong(track_id);

    return (
        <div >
            <img src={song.image} alt={song.name} />

            <div>
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
            </div>
        </div>
    )
}