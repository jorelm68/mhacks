import { Track } from "@/lib/types"

interface TrackProps {
    track: Track;
}

export default function TrackCard({ track }: TrackProps) {
    return (
        <div >
            <img src={track.albumArt} alt={track.name} />

            <div>
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
            </div>
        </div>
    )
}